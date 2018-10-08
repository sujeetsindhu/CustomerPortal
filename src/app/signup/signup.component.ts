import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = 'Signup Form';
  user: any = {};
  url = 'http://localhost:3000/loginService/';

  constructor(private httpClient: HttpClient) {
  }

  signup() {
    const body = {
      email: this.user.email,
      password: this.user.password,
      firstname: this.user.firstname,
      lastname: this.user.lastname
    };

    this.httpClient.post(this.url + 'signup', body).subscribe((res: HttpResponse<any>) => {
      if (res.status === 200) {
        alert('User created successfully');
       }
    }, err => {
      alert('User Already Registered/Some other error.' + err);
    });
  }
  ngOnInit() {}
}
