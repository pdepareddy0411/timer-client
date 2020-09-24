import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 

import { AppComponent } from './app.component';
import { TimerClockComponent } from './timer-clock/timer-clock.component';
import { TimerApiService } from './service/timer-api.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {DayPilotModule} from "daypilot-pro-angular";

@NgModule({
  declarations: [
    AppComponent,
    TimerClockComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DayPilotModule
  ],
  providers: [TimerApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
