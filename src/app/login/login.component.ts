import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login Form';

  url = 'http://localhost:3000/loginService/';

  user: any = {};
  constructor(private httpClient: HttpClient) { }

  login() {
    const body = {
        email: this.user.email,
        password: this.user.password
    };

    this.httpClient.post(this.url + 'login', body).subscribe((res: HttpResponse<any>) => {
    if (res.status === 200) {
        alert('User logged in successfully.');
       }
    }, err => {
        alert('Unauthorized User.');
    });
}
  ngOnInit() {
  }

}
