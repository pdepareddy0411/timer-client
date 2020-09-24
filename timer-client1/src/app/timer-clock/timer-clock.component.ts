import { Component, OnInit } from '@angular/core';
import { TimerApiService } from '../service/timer-api.service';
import { TimeType } from '../models/Time';

@Component({
  selector: 'app-timer-clock',
  templateUrl: './timer-clock.component.html',
  styleUrls: ['./timer-clock.component.css']
})
export class TimerClockComponent implements OnInit {


  date: any;
  constructor(private timerApiService: TimerApiService) { }

  ngOnInit(): void {
    this.getDate();
  }

  getDate(): void {
    this.timerApiService.getDate().subscribe((data:TimeType) => {
      this.date = data.time;
    });
  }

}
