import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private acountServ: AccountService, private router: Router) {}

  isLogin() {
    return this.acountServ.isLogin();
  }

  logout() {
    this.acountServ.Logout();
    this.router.navigate(['/home']);
  }
}
