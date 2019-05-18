import { Component, OnInit, Input } from '@angular/core';
import { CodecampService } from '../services/codecamp.service';
import { CodecampEvent } from '../event';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {
  codecampEvents: CodecampEvent[];

  @Input()
  admin: boolean;

  constructor(private codecampService: CodecampService) {}

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.codecampService.getEvents().subscribe(events => this.codecampEvents = events);
  }

  deleteEvent(ccId: any): void {
    if (confirm('Are you sure?')) {
      this.codecampService.deleteEvent(ccId).subscribe(events => console.log(events));
    }
  }

}
