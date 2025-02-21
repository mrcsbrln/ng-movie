import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MobileMenuComponent } from './shared/mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-root',
  imports: [
    FooterComponent,
    HeaderComponent,
    RouterOutlet,
    MobileMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngMovie';
  mobileMenuVisible = signal(false);

  toggleMobileMenu() {
    const isOpen = !this.mobileMenuVisible();
    this.mobileMenuVisible.set(isOpen);

    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  closeMobileMenu() {
    this.mobileMenuVisible.set(false);
    document.body.classList.remove('no-scroll');
  }
}
