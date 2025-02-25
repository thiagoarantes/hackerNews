import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-page-link',
  imports: [],
  templateUrl: './page-link.component.html',
  styleUrl: './page-link.component.scss',
})
export class PageLinkComponent {
  readonly title = input.required<string>();

  open = model<boolean>(false);

  toggle() {
    this.open.set(!this.open());
  }
}
