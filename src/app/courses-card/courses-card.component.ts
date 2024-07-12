import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { NavbarStudentComponent } from "../navbar-student/navbar-student.component";

@Component({
  selector: 'app-courses-card',
  standalone: true,
  imports: [NavbarComponent, NavbarStudentComponent],
  templateUrl: './courses-card.component.html',
  styleUrl: './courses-card.component.css'
})
export class CoursesCardComponent {

}
