import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isDark: boolean = false;
  public userName: string = 'John Doe';
  public userInitials: string = 'JD';

  constructor() {}

  ngOnInit(): void {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    this.isDark = savedTheme === 'dark';
    this.applyTheme();

    // Generate user initials from userName
    this.userInitials = this.userName
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.applyTheme();
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  private applyTheme(): void {
    if (this.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
