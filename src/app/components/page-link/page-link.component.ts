import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-page-link',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './page-link.component.html',
  styleUrl: './page-link.component.scss',
})
export class PageLinkComponent {
  readonly href = input.required<string>();
  readonly title = input.required<string>();
  readonly openInNewWindow = input<boolean>(false);
  readonly comment = input<boolean>(false);
}
