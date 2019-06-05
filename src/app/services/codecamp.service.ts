import { Injectable } from '@angular/core';
import { CodecampEvent } from '../event';
import { Events } from './data/events';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Talk } from '../talk';

@Injectable({
  providedIn: 'root'
})
export class CodecampService {
  apiUrl: string = 'https://backendrepo.azurewebsites.net/api/camps/';
  public admin = true;
  headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8', 'X-Requested-With': 'XMLHttpRequest'})
  };
  constructor(private http: HttpClient) { }

  getEvents(): Observable<CodecampEvent[]> {
    // return of(Events);
    return this.http.get<CodecampEvent[]>(this.apiUrl + '?includeTalks=true');
  }

  saveEvent(event: CodecampEvent): Observable<any> {
    // event.campId = Number(new Date().getTime());
    // Events.push(event);
    // return of(Events);
    return this.http.post<CodecampEvent>(this.apiUrl , event, this.headers);
  }

  addTalk(venue: string, talk: Talk): Observable<any> {
    return this.http.post<Talk>(this.apiUrl  + venue + '/talks', talk, this.headers);
  }

  deleteTalk(venue: string, talkId: number){
    return this.http.delete<string>(this.apiUrl + venue + '/talks/' + talkId,  this.headers);
  }

  updateTalk(talk: Talk, venue: string){
    return this.http.put<string>(this.apiUrl + venue  + '/talks/' + talk.talkId, talk,  this.headers);
  }

  updateEvent(event: CodecampEvent): Observable<CodecampEvent> {
    // for ( let e of Events ) {
    //   if (e.campId === event.campId) {
    //     e = event;
    //   }
    // }
    // return of(event);
    return this.http.put<CodecampEvent>(this.apiUrl + event.venue, event, this.headers);
  }
  deleteEvent(venue: string): Observable<any> {
    // for ( let i = 0 ; i < Events.length ; i++ ) {
    //   if (Events[i].campId === event) {
    //     Events.splice(i, 1);
    //   }
    // }
    // return of(Events);
    return this.http.delete<CodecampEvent>(this.apiUrl  + venue,  this.headers);

  }

}
