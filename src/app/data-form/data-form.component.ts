import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { camelCase, get, zip, groupBy } from 'lodash';
import { DataModelService } from '../data-model.service';
import getModel from '../objectModel';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent implements OnInit {
  @Input() data;
  @Input() name;
  @Output() valueChanged = new EventEmitter()
  constructor(private dataService:DataModelService) {
    
  }
  // rivate fb: FormBuilder) {
  ngOnInit() {
    this.dataService.initModel(this.name,this.data);
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
