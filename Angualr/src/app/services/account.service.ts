import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  baseURL: string = 'http://localhost:3002/users';

  Register() {}

  token: boolean = false;
  user: {} | undefined;
  Login(email: string, password: string) {
    this.http
      .get(`${this.baseURL}?email=${email}&password=${password}`)
      .subscribe((data) => {
        console.log(data);
        this.user = data;
        if (data) this.token = true;
      });
  }

  Logout() {
    this.token = false;
  }

  isLogin() {
    console.log(this.user);
    return this.token;
  }

  
}
