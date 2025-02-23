import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-icon',
  imports: [],
  templateUrl: './page-icon.component.html',
  styleUrl: './page-icon.component.scss',
})
export class PageIconComponent {
  readonly path = input.required<string>();
}
