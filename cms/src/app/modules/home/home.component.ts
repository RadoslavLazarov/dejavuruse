import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  clickCounter = 0;
  name = '';
  validate: Boolean = false;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() {
    this.http.fetchHome().subscribe(data => {
      console.log(data);
      this.validate = true;
    }, err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401 || err.status === 500) {
          this.router.navigate(['content/login']);
        }
      }
    });
  }

  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    const myClasses = {
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4,
    };
    return myClasses;
  }
}

