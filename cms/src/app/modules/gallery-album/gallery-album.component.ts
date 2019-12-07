import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-gallery-album',
  templateUrl: './gallery-album.component.html',
  styleUrls: ['./gallery-album.component.scss']
})
export class GalleryAlbumComponent implements OnInit {
  galleryCategories: Object;
  nameBg = new FormControl('', [
    Validators.required,
  ]);
  nameEn = new FormControl('', [
    Validators.required,
  ]);
  descriptionBg = new FormControl('', [
    Validators.required,
  ]);
  descriptionEn = new FormControl('', [
    Validators.required,
  ]);
  id = new FormControl('', [
    Validators.required,
  ]);
  selectCategory = new FormControl('', [
    Validators.required,
  ]);

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.db({
      action: 'find',
      collection: 'galleryCategories',
    }).subscribe(data => {
      this.galleryCategories = data;
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
