import { Injectable } from '@angular/core';
import getModel from './objectModel';
import { camelCase, get, zip, groupBy } from 'lodash';
@Injectable()
export class DataModelService {

  parsedList: any;
  keyedList: any;
  groupedList: any[];
  modelRoot: any;
  constructor() {

   }

   initModel(name,data) {
    this.parsedList = getModel(name, data);
    this.keyedList = groupBy(this.parsedList, 'key');
    this.groupedList = groupBy(this.parsedList, 'parent');
    this.modelRoot = this.groupedList[name];
   }
}