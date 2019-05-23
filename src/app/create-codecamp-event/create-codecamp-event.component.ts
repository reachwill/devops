import { Component, OnInit } from '@angular/core';
import { CodecampEvent } from '../event';
import { CodecampService } from '../services/codecamp.service';

import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-create-codecamp-event',
  templateUrl: './create-codecamp-event.component.html',
  styleUrls: ['./create-codecamp-event.component.css']
})
export class CreateCodecampEventComponent implements OnInit {
  // object bound to form and also object to send to http.post
  event = new CodecampEvent();
  codecampEvents: CodecampEvent[];

  constructor(private codecampService: CodecampService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getEvents();
  }

  onSubmit() {
    console.log(this.event);
    this.codecampService.saveEvent(this.event).subscribe(returnedData => {
      console.log(returnedData);
      this.openSnackBar('Event Created', 'Success');
      this.event = new CodecampEvent(); // to clear the form
    });
  }

  getEvents(): void {
    this.codecampService.getEvents().subscribe(events => this.codecampEvents = events);
    console.log(this.codecampEvents);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  dateChanged(ccDateInput) {
    const d = new Date(ccDateInput.value);
    ccDateInput.value = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }

}
