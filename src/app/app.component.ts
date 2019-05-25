import { Component } from '@angular/core';
import {CodecampService} from './services/codecamp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codecamp';
  constructor(private codecampService: CodecampService) {}

  toggleAdmin(toggle) {
    this.codecampService.admin = toggle.checked;
  }

}
