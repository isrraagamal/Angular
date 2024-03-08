import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private accServ: AccountService, private router: Router) {}

  form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  submit(e: Event) {
    e.preventDefault();
    if (this.form.valid) {
      console.log(this.form.value);
      this.accServ.Login(this.form.value.username, this.form.value.password);
      this.router.navigate(['/products']);
    }
  }
}
