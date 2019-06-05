import { Component, OnInit, Input } from '@angular/core';
import { CodecampService } from '../services/codecamp.service';
import { CodecampEvent } from '../event';
// interface RootObject {
//   CodecampEvent: CodecampEvent;
// }

// interface CodecampEvent {
//   campId: number;
//   name: string;
//   venue: string;
//   eventDate: string;
//   duration: number;
//   talks: Talk[];
// }

// interface Talk {
//   talkId: number;
//   title: string;
//   speaker: Speaker;
// }

// interface Speaker {
//   speakerId: number;
//   firstName: string;
//   lastName: string;
//   middleName?: any;
//   company: string;
//   companyUrl: string;
// }

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

  deleteEvent(venue: any): void {
    if (confirm('Are you sure?')) {
      this.codecampService.deleteEvent(venue).subscribe((events) => {this.getEvents(); }, (err) => {console.log(err); });
    }
  }

}
