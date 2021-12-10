import { Component, Input, OnInit } from '@angular/core';
import { DataModelService } from '../data-model.service';

@Component({
  selector: 'app-data-group',
  templateUrl: './data-group.component.html',
  styleUrls: ['./data-group.component.css'],
})
export class DataGroupComponent implements OnInit {
  @Input() key;
  _;
  constructor(private dataService: DataModelService) {}

  ngOnInit() {
    console.log(this.key);
    this._ = this.dataService.getKey(this.key);
    console.log(this._);
  }
}
