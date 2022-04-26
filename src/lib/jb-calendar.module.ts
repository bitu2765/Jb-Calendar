import { NgModule } from '@angular/core';
import { JbCalendarComponent } from './jb-calendar.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    JbCalendarComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    JbCalendarComponent
  ]
})
export class JbCalendarModule { }
