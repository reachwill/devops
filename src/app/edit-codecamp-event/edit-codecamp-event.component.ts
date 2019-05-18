import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  CodecampService
} from '../services/codecamp.service';
import {
  CodecampEvent
} from '../event';

import {
  MatSnackBar
} from '@angular/material';

@Component({
  selector: 'app-edit-codecamp-event',
  templateUrl: './edit-codecamp-event.component.html',
  styleUrls: ['./edit-codecamp-event.component.css']
})
export class EditCodecampEventComponent implements OnInit {
  sub: any;
  codecampEvents;
  event = new CodecampEvent();
  constructor(private codecampService: CodecampService, private route: ActivatedRoute, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.codecampService.getEvents().subscribe((events) => {
        this.codecampEvents = events;
        this.event = (events.filter((e) => {
          return e.ccId === Number(params.id);
        })[0]);
      });
    });
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


}
