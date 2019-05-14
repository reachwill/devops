import { Component, OnInit } from '@angular/core';
import { CodecampEvent } from '../event';
import { CodecampService } from '../services/codecamp.service';

@Component({
  selector: 'app-create-codecamp-event',
  templateUrl: './create-codecamp-event.component.html',
  styleUrls: ['./create-codecamp-event.component.css']
})
export class CreateCodecampEventComponent implements OnInit {

  event = new CodecampEvent();
  codecampEvents;

  constructor(private codecampService: CodecampService) { }

  ngOnInit() {
    this.getEvents();
  }

  onSubmit() {
    console.log(this.event);
    this.codecampService.saveEvent(this.event).subscribe(returnedData => console.log(returnedData));
  }

  getEvents(): void {
    this.codecampService.getEvents().subscribe(events => this.codecampEvents = events);
    console.log(this.codecampEvents);
  }
}
