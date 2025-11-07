import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem, SubMenuItem } from '@models/menu.model';
import { MenuService } from '../../services/menu.service';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';
import { SidebarSubmenuComponent } from '../sidebar-submenu/sidebar-submenu.component';

@Component({
  standalone: true,
  selector: 'app-sidebar-menu',
  imports: [CommonModule, SvgIconComponent, RouterLink, SidebarSubmenuComponent],
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuComponent implements OnInit {
  public pagesMenu$: Observable<MenuItem[]> = new Observable<MenuItem[]>();
  public showSideBar$: Observable<boolean> = new Observable<boolean>();

  constructor(private menuService: MenuService) {
    this.showSideBar$ = this.menuService.showSideBar$;
    this.pagesMenu$ = this.menuService.pagesMenu$;
  }

  public toggleMenu(subMenu: SubMenuItem) {
    this.menuService.toggleMenu(subMenu);
  }

  ngOnInit(): void {}
}
