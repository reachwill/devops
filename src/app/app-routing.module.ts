import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCodecampEventComponent } from './create-codecamp-event/create-codecamp-event.component';
import { EventlistComponent } from './eventlist/eventlist.component';

const routes: Routes = [
  { path: 'create', component: CreateCodecampEventComponent },
  {
    path: 'events', component: EventlistComponent
  },
  { path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
