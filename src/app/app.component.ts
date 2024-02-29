import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, SidemenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17-dashboard-v1.0.3';
}
