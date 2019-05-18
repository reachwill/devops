import { Injectable } from '@angular/core';
import { CodecampEvent } from '../event';
import { Events } from './data/events';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodecampService {

  constructor() { }

  getEvents(): Observable<any> {
    return of(Events);
  }

  saveEvent(event: CodecampEvent): Observable<any> {
    event.ccId = new Date().getTime();
    Events.push(event);
    return of(Events);
  }

  updateEvent(event: CodecampEvent): Observable<any> {
    for ( let e of Events ) {
      if (e.ccId === event.ccId) {
        e = event;
      }
    }
    return of(event);
  }
  deleteEvent(event: CodecampEvent): Observable<any> {
    for ( let i = 0 ; i < Events.length ; i++ ) {
      if (Events[i].ccId === event) {
        Events.splice(i, 1);
      }
    }
    return of(Events);
  }
}
