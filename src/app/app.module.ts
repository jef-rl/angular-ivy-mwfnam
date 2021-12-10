import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DataFormComponent } from './data-form/data-form.component';
import { DataGroupComponent } from './data-group/data-group.component';
import { DataArrayComponent } from './data-array/data-array.component';
import { DataControlComponent } from './data-control/data-control.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ,DataFormComponent,DataGroupComponent,DataArrayComponent,DataControlComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
