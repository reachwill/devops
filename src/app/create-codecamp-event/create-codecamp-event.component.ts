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

  event = new CodecampEvent();
  codecampEvents;

  constructor(private codecampService: CodecampService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getEvents();
  }

  onSubmit() {
    console.log(this.event);
    this.codecampService.saveEvent(this.event).subscribe(returnedData => {
      console.log(returnedData);
      this.openSnackBar('Event Created', 'Success');
      this.event = new CodecampEvent();
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
