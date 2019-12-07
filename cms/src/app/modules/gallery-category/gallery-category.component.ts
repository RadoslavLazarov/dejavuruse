import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-gallery-category',
  templateUrl: './gallery-category.component.html',
  styleUrls: ['./gallery-category.component.scss']
})
export class GalleryCategoryComponent implements OnInit {
  categories: Object;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.db({
      action: 'find',
      collection: 'galleryCategories',
    }).subscribe(data => {
      this.categories = data;
      // console.log(data);
    }, err => {
      // if (err instanceof HttpErrorResponse) {
      //   if (err.status === 401 || err.status === 500) {
      //     this.router.navigate(['content/login']);
      //   }
      // }
    });
  }

}
