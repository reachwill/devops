import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCodecampEventComponent } from './create-codecamp-event/create-codecamp-event.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { EditCodecampEventComponent } from './edit-codecamp-event/edit-codecamp-event.component';

const routes: Routes = [
  { path: 'create-codecamp-event', component: CreateCodecampEventComponent },
  {
    path: 'codecamp-events', component: EventlistComponent
  },
  { path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  { path: 'editcodecamp/:id', component: EditCodecampEventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
