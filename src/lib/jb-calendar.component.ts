import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-jb-calendar',
  templateUrl: './jb-calendar.component.html',
  styleUrls: ['./jb-calendar.component.css']
})
export class JbCalendarComponent implements OnInit {

  public current_year = new Date().getFullYear();
  public selected_year = new Date().getFullYear();
  public selected_month = new Date().getMonth();
  public buffer_day = new Date(this.selected_year,this.selected_month,).getDay();
  public total_days = new Date(this.selected_year,this.selected_month+1,0).getDate();
  public week_days = Array("Sun","Mon","Tue","Wed","Thur","Fri","Sat");
  public month_html=``;

  constructor() {
   }

  ngOnInit(): void {
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  years(a:any,b:any): Array<number> {
    let yy= Array();

    for(let i=a;i<b+1;i++)
    {
      yy.push(i);
    }
    return yy;
  }

  set_year(yy:any){
    // alert(yy.target.value);
    this.selected_year = yy.target.value;
    console.log(this.selected_year);
    this.set();
  }

  set_month(yy:any){
    // alert(yy.target.value);
    this.selected_month = yy.target.value;
    console.log(this.selected_month);
    this.set();
  }

  set(){
    this.buffer_day = new Date(this.selected_year,this.selected_month,).getDay();
    this.total_days = new Date(this.selected_year,this.selected_month+1,0).getDate();
  }

}
