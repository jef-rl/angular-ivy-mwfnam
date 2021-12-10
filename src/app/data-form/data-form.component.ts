import { Component, Input, OnInit } from '@angular/core';
import { camelCase, get, zip, groupBy } from 'lodash';
import getModel from '../objectModel';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent implements OnInit {
  @Input() data;
  @Input() name;
  objectKeysList: any;
  objectGroupList: string[];
  objectDisplay: any;
  objectModelList: any;
  objectKeyedList: any;
  modelRoot: any;
  constructor() {}
  // rivate fb: FormBuilder) {
  ngOnInit() {
    this.objectModelList = getModel(this.name, this.data);
    this.objectKeyedList = groupBy(this.objectModelList, 'key');
    this.objectGroupList = groupBy(this.objectModelList, 'parent');
    this.modelRoot = this.objectGroupList[this.name];
    // const model = this.objectKeysList;
    // const maxes = [0,1,2,3,4,5].map(i=> model.reduce((max,field)=> (field && field[i] && field[i].length>max ? field[i].length+2 : max),0))
    //   const spaces = [0,1,2,3,4,5].map(i=> ' '.repeat(maxes[i]))
    //   console.log(maxes)
    //   const display = model.map(x=>{
    //     return ([0,1,2,3,4,5].map(i=>(x[i]!==undefined ? (x[i]+spaces[i]).slice(0,maxes[i]) : spaces[i])).join(''))
    //   })
    //   this.objectDisplay = display
  }
}
