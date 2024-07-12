import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { HerosectionComponent } from "../herosection/herosection.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HerosectionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
