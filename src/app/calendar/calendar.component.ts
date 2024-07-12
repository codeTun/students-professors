import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { NavbarProfessorComponent } from "../navbar-professor/navbar-professor.component";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, NavbarProfessorComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

}
