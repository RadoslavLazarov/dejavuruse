import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  galleryCategories: object;

  constructor(private http: HttpService, private router: Router) { }

  ngOnInit() { }

  buttonClick() {
    this.http.myMethod().subscribe(data => {
      this.galleryCategories = data;
      console.log(this.galleryCategories);
    }, err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401 || err.status === 500) {
          this.router.navigate(['content/login']);
        }
      }
    });
  }
}
