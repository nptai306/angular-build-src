import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '@models/menu.model';
import { ThemeService } from 'src/app/core/services/theme.service';
import packageJson from '../../../../package.json';
import { MenuService } from '../services/menu.service';
import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  imports: [CommonModule, SidebarMenuComponent, SvgIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public showSideBar$: Observable<boolean> = new Observable<boolean>();
  public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();
  public appJson: any = packageJson;

  constructor(public themeService: ThemeService, private menuService: MenuService) {
    this.showSideBar$ = this.menuService.showSideBar$;
    this.pagesMenu$ = this.menuService.pagesMenu$;
  }

  ngOnInit(): void {}

  public toggleSidebar() {
    this.menuService.toggleSidebar();
  }

  toggleTheme() {
    this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
  }
}
