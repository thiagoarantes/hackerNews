import { Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { PageIconComponent } from '../page-icon/page-icon.component';
import { Router } from '@angular/router';
import { PageStateService } from '../../services';

@Component({
  selector: 'app-tab',
  imports: [PageIconComponent],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss',
})
export class TabComponent {
  private readonly router = inject(Router);

  readonly path = input.required<string>();
  readonly title = input.required<string>();

  content = viewChild<ElementRef>('content');

  constructor(private readonly pageService: PageStateService) {}

  navigateToHome() {
    this.router.navigate(['home']);
    this.pageService.setCurrentPage('home');
  }
}
