import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SubMenuItem } from '@models/menu.model';
import { MenuService } from '../../services/menu.service';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-sidebar-submenu',
  imports: [CommonModule, SvgIconComponent, RouterModule],
  templateUrl: './sidebar-submenu.component.html',
  styleUrls: ['./sidebar-submenu.component.css'],
})
export class SidebarSubmenuComponent implements OnInit {
  @Input() public submenu = <SubMenuItem>{};
  public showSideBar$: Observable<boolean> = new Observable<boolean>();

  constructor(private menuService: MenuService) {
    this.showSideBar$ = this.menuService.showSideBar$;
  }

  ngOnInit(): void {}

  public toggleMenu(menu: any) {
    this.menuService.toggleSubMenu(menu);
  }

  private collapse(items: Array<any>) {
    items.forEach((item) => {
      item.expanded = false;
      if (item.children) this.collapse(item.children);
    });
  }
}
