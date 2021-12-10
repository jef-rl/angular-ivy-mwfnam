import { Component, Input, OnInit } from '@angular/core';
import { DataModelService } from '../data-model.service';

@Component({
  selector: 'app-data-control',
  templateUrl: './data-control.component.html',
  styleUrls: ['./data-control.component.css'],
})
export class DataControlComponent implements OnInit {
  @Input() key;
  _;
  constructor(private dataService: DataModelService) {}

  ngOnInit() {
    console.log(this.key);
    this._ = this.dataService.getKey(this.key);
    console.log(this._);
  }
}
