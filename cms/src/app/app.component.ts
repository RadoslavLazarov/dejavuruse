import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cms';

  constructor(public authService: AuthService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'info',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/info-24px.svg'));
    iconRegistry.addSvgIcon(
      'done',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/done_outline-24px.svg'));
  }
}
