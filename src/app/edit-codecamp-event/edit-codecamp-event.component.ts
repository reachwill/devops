import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CodecampService } from '../services/codecamp.service';
import { CodecampEvent } from '../event';
import { MatSnackBar } from '@angular/material';
import { Talk } from '../talk';
import { Speaker } from '../speaker';

@Component({
  selector: 'app-edit-codecamp-event',
  templateUrl: './edit-codecamp-event.component.html',
  styleUrls: ['./edit-codecamp-event.component.css']
})
export class EditCodecampEventComponent implements OnInit {
  sub: any;
  codecampEvents: CodecampEvent[];
  event: CodecampEvent = new CodecampEvent();
  talk: Talk = new Talk();
  speaker: Speaker = new Speaker();

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
  }

  addTalk() {
    this.talk.talkId = new Date().getTime();
    this.talk.speaker = this.speaker;
    this.event.talks.push(this.talk);
    this.talk = new Talk();
    this.speaker = new Speaker();
    console.log(this.event.talks);
    this.onSubmit();
  }

  onSubmit() {
    this.codecampService.updateEvent(this.event).subscribe(returnedData => {
      console.log(returnedData);
      this.openSnackBar('Event Updated', 'Success');
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
