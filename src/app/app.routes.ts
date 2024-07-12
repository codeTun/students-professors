import { Routes } from '@angular/router';
import { ListCoursesComponent } from '../app/list-courses/list-courses.component'; // Adjust the path as necessary
import { CoursesCardComponent } from './courses-card/courses-card.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'contact', component: ContactComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'list-courses', component: ListCoursesComponent },
  { path: 'courses-card', component: CoursesCardComponent },
];
