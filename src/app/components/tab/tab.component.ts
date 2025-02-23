import { Component, ElementRef, input, viewChild } from '@angular/core';
import { PageIconComponent } from '../page-icon/page-icon.component';

@Component({
  selector: 'app-tab',
  imports: [PageIconComponent],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent {
  readonly path = input.required<string>();
  readonly title = input.required<string>();

  content = viewChild<ElementRef>('content');
}
