import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CodecampService } from '../services/codecamp.service';
import { CodecampEvent } from '../event';
import { MatSnackBar } from '@angular/material';
import { Talk } from '../talk';

@Component({
  selector: 'app-edit-codecamp-event',
  templateUrl: './edit-codecamp-event.component.html',
  styleUrls: ['./edit-codecamp-event.component.css']
})
export class EditCodecampEventComponent implements OnInit {
  sub: any;
  codecampEvents;
  event = new CodecampEvent();
  talk = new Talk();

  constructor(private codecampService: CodecampService, private route: ActivatedRoute, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.codecampService.getEvents().subscribe((events) => {
        this.codecampEvents = events;
        this.event = (events.filter((e) => {
          return e.campId === Number(params.id);
        })[0]);
      });
    });
    console.log(this.event);
    this.addTestTalk('Test talk', 'Will', 'Gregory');

  }

  addTestTalk(title: string, firstName: string, lastName: string): void{
    // this.talk.title = title;
    // this.talk.speaker.firstName = firstName;
    // this.talk.speaker.lastName = lastName;
    this.event.talks.push({title: 'Talk Title', speaker: {firstName: 'Will', lastName: 'Test'}});
    console.log(this.event);
  }

  onSubmit() {
    this.codecampService.updateEvent(this.event).subscribe(returnedData => {
      console.log(returnedData);
      this.openSnackBar('Event Updated', 'Success');
      // this.event = new CodecampEvent();
    });
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
