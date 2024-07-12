import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-courses-card',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './courses-card.component.html',
  styleUrl: './courses-card.component.css'
})
export class CoursesCardComponent {

}
