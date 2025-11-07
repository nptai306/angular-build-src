import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public year: number = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}
}
