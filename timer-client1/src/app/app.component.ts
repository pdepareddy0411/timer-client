import { Component } from '@angular/core';
import * as moment from 'moment';
import {Observable} from "rxjs";
import {DayPilot} from "daypilot-pro-angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'timer-client';
  clockOption: string;
  clocks: string[] = ['analog','digital'];
  
  zones: string[]=['EST','PST','CST'];
  zone:string;
  hourHandStyle; 
  minuteHandStyle; 
  secondHandStyle; 
  isZone:boolean = false;

  timerId: any;

  date: Date;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;

  ngAfterViewInit() {
    this.zone == this.zone==undefined ? "EST" : this.zone;
    this.timerId = this.doSomething(this.zone);
  }

  animateAnalogClock() {
    this.hourHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(this.hour * 30) + (this.minute * 0.5) + (this.second * (0.5 / 60))}deg)` };
    
    this.minuteHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(this.minute * 6) + (this.second * 0.1)}deg)` };
    
    this.secondHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${this.second * 6}deg)` };
  }

  getTime() {
    return setInterval(() => {
      this.date = new Date();
      this.hour = this.date.getHours();
      this.minute = this.date.getMinutes();
      this.second = this.date.getSeconds();

      this.animateAnalogClock();
    }, 1000);
  }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }

  
  doSomething($event) {
    this.isZone = $event != undefined ? true:false;
    let x = moment(new Date, "American/New_York");
    this.date = new Date();
    this.hour = x.hours();
    
    
    if($event == "CST") {
      this.hour = x.hours()-1;
      this.minute = x.minute();
        this.second = x.seconds();
      return setInterval(() => {    
        this.animateAnalogClock();
      }, 1000);
    }
    if($event == "PST") {
      this.hour = x.hours()-3;
      this.minute = x.minute();
        this.second = x.seconds();
      return setInterval(() => {    
        this.animateAnalogClock();
      }, 1000);
    }
    
  }
  
  events: any[] = [
    {
      id: "1",
      start: DayPilot.Date.today(),
      end: DayPilot.Date.today(),
      text: "Event 1"
    }
  ];

  
  constructor(private http : HttpClient){
  }

  getEvents(from: DayPilot.Date, to: DayPilot.Date): Observable<any[]> {

    // simulating an HTTP request
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.events);
      }, 200);
    });

  }

  
}
