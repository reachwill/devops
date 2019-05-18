import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCodecampEventComponent } from './create-codecamp-event/create-codecamp-event.component';
import { MatInputModule, MatButtonModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EditCodecampEventComponent } from './edit-codecamp-event/edit-codecamp-event.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCodecampEventComponent,
    EventlistComponent,
    EditCodecampEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
