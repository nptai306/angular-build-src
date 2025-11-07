import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { LayoutConfig } from '@models/layout.model';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-layout',
  imports: [HeaderComponent, SidebarComponent, MainContentComponent, FooterComponent, RouterModule, CommonModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  layout!: LayoutConfig;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.layout = data['layout'];
    });
  }

  get showHeader(): boolean {
    return this.layout?.header === true;
  }

  get showFooter(): boolean {
    return this.layout?.footer === true;
  }

  get showSidebar(): boolean {
    return this.layout?.sidebar === true;
  }
}
