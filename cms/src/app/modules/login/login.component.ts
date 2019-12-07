import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginUserData = {
    name: '',
    pass: ''
  };

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.auth.loginUser(this.loginUserData).subscribe(res => {
      if (!res.success) {
        this.router.navigate(['content/login']);
        console.log('res.error');
      } else {
        console.log('res.success');
        localStorage.setItem('token', res.token);
        this.router.navigate(['content']);
      }
    });
  }

}
