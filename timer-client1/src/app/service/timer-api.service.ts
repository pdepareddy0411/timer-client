import { Injectable } from '@angular/core';
import { HttpManagerService } from './http-manager.service';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { TimeType } from '../models/Time';

@Injectable({
  providedIn: 'root'
})
export class TimerApiService {

  constructor(private httpmanager: HttpManagerService) { }

  getDate(): Observable<TimeType> {
    const url = `${environment.endpointUrl.dateApiUrl}`;
    return this.httpmanager.get<any>(url);
  }

}
