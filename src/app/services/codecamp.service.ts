import { Injectable } from '@angular/core';
import { CodecampEvent } from '../event';
import { Events } from './data/events';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodecampService {

  constructor() { }

  getEvents() {
    return of(Events);
  }

  saveEvent(event: CodecampEvent): Observable<any> {
    Events.push(event);
    return of(Events);
  }

}
