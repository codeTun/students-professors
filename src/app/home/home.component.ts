import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HerosectionComponent } from "../herosection/herosection.component";
import { FooterComponent } from "../footer/footer.component";
import { NavbarStudentComponent } from "../navbar-student/navbar-student.component";
import { NavbarProfessorComponent } from "../navbar-professor/navbar-professor.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HerosectionComponent, FooterComponent, NavbarStudentComponent, NavbarProfessorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
