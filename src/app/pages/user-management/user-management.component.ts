import { Component } from '@angular/core';
import { Layout } from '@shared/constant/layout';

@Component({
  standalone: true,
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent {
  constructor() {
    for (const [key, value] of Object.entries(Layout)) {
      console.log(key, value);
    }
  }
}
