import { Injectable } from '@angular/core';
import { CodecampEvent } from '../event';
import { Events } from './data/events';
import { Observable, of } from 'rxjs';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CodecampService {

  public admin = true;

  constructor() { }

  getEvents(): Observable<any> {
    return of(Events);
   // this.http.get;
  }

  saveEvent(event: CodecampEvent): Observable<any> {
    event.campId = Number(new Date().getTime());
    Events.push(event);
    return of(Events);
  }

  updateEvent(event: CodecampEvent): Observable<any> {
    for ( let e of Events ) {
      if (e.campId === event.campId) {
        e = event;
      }
    }
    return of(event);
  }
  deleteEvent(event: CodecampEvent): Observable<any> {
    for ( let i = 0 ; i < Events.length ; i++ ) {
      if (Events[i].campId === event) {
        Events.splice(i, 1);
      }
    }
    return of(Events);
  }

}
