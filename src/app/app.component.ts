import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { CoursesCardComponent } from "./courses-card/courses-card.component";
import { FooterComponent } from "./footer/footer.component";
import { HerosectionComponent } from "./herosection/herosection.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CoursesCardComponent, FooterComponent, HerosectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'studet-professor';
  showHeroSection: boolean = false;
  

}
