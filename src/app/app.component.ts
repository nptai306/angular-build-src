import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { ResponsiveHelperComponent } from '@shared/components/responsive-helper/responsive-helper.component';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResponsiveHelperComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-frontend';

  constructor(public themeService: ThemeService) {}
}
