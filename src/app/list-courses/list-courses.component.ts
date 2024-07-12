import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-list-courses',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './list-courses.component.html',
  styleUrl: './list-courses.component.css'
})
export class ListCoursesComponent {

}
