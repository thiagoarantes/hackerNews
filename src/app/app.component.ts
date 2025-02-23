import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hacker-news';
  currentPage = 'home';
  navOpen = false;

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  navigateTo(page: string) {
    this.currentPage = page;
  }
}
