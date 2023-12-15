import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  count = 0;
  so=0

  handleClickMe() {
    this.count += 1;}
    handleClick() {
      this.so += 1;}
}
