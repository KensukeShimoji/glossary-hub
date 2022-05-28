import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gh-layout-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {
  constructor(private readonly router: Router) {}

  goToTopPage() {
    this.router.navigateByUrl('/');
  }
}
