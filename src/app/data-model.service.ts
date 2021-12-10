import { Injectable } from '@angular/core';
import getModel from './objectModel';
import { camelCase, get, zip, groupBy, keyBy } from 'lodash';
export interface ModelEntries {
  key?:       string;
  parent?:    string;
  formType?:  'group'|'array'| 'control' | 'error';
  valueType?: null | string;
  fieldName?: string;
  entryType?: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataModelService {
  parsedList: any;
  keyedList: any;
  groupedList: any[];
  modelRoot: any;
  data: any;
  name: any;
  constructor() {}

  initModel(name, data) {
    this.name = name;
    this.data = data;
    this.parsedList = getModel(name, data);
    this.keyedList = keyBy(this.parsedList, 'key');
    this.groupedList = groupBy(this.parsedList, 'parent');
    this.modelRoot = this.groupedList[name];
  }

  root(key) {
    return;
  }
  array(key) {
    return this.keyDef(key);
  }
  group(key) {
    return this.keyDef(key);
  }
  getKey(key) {
    return this.keyDef(key);
  }

  keyDef(key) {
    const keyed = this.keyedList[key] ? this.keyedList[key] : {
      valueType: this.name,
      formType: 'group',
      fieldName: null,
      parent: null,
      key

    } ;
    const grouped= this.groupedList[key];
    return {
      ...keyed,
      grouped
      //  ...(keyDef?.)
    };
  }
}
