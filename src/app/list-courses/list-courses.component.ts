import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { NavbarStudentComponent } from "../navbar-student/navbar-student.component";
import { NavbarProfessorComponent } from "../navbar-professor/navbar-professor.component";

@Component({
  selector: 'app-list-courses',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, NavbarStudentComponent, NavbarProfessorComponent],
  templateUrl: './list-courses.component.html',
  styleUrl: './list-courses.component.css'
})
export class ListCoursesComponent {

}
