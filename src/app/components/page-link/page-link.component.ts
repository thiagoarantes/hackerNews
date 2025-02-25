import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-link',
  imports: [],
  templateUrl: './page-link.component.html',
  styleUrl: './page-link.component.scss',
})
export class PageLinkComponent {
  readonly title = input.required<string>();
  readonly onClick = input.required<() => void>();
}
