import { Component, OnInit } from '@angular/core';
import { CodecampService } from '../services/codecamp.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {
  codecampEvents;
  constructor(private codecampService: CodecampService) {}

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.codecampService.getEvents().subscribe(events => this.codecampEvents = events);
    console.log(this.codecampEvents);
  }

}
