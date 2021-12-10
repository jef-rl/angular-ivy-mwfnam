import { Component, Input, OnInit } from '@angular/core';
import { DataModelService } from '../data-model.service';

@Component({
  selector: 'app-data-array',
  templateUrl: './data-array.component.html',
  styleUrls: ['./data-array.component.css'],
})
export class DataArrayComponent implements OnInit {
  @Input() key;
  _;
  constructor(private dataService: DataModelService) {}

  ngOnInit() {
    console.log(this.key);
    this._ = this.dataService.getKey(this.key);
    console.log(this._);
  }
}
