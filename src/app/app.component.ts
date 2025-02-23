import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  currentPage = 'all';
  navOpen = true;
  currentYear = new Date().getFullYear();

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  navigateTo(page: string) {
    this.currentPage = page;
  }
}
