import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from '../../http.service';

// import { DialogConfirmation } from '../../shared/components/dialogs/confirmation/confirmation.component';
interface Meta {
  bg: any;
  en: any;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  panelOpenState = false;
  srcResult: any;
  meta: Meta;
  categories: Object;
  uploadConfig = {
    imageCover: {
      gallery: {
        collection: 'categories',
        document: 'gallery',
        item: 'imageCover',
        multiple: false,
        location: encodeURIComponent('images/pages-covers'),
        fileName: encodeURIComponent('gallery-cover'),
        maxFileSize: 2 * 1024 * 1024 // 2mb
      },
      category: {
        url: 'url category',
        multiple: true,
        maxFileSize: 2 * 1024 * 1024 // 2mb
      },
      album: {
        url: 'url album',
        multiple: false
      }
    }
  };

  constructor(private http: HttpService, public dialog: MatDialog, private snackBar: MatSnackBar) { }


  ngOnInit() {
    this.http.db({
      action: 'findOne',
      collection: 'categories',
      document: 'gallery'
    }).subscribe(data => {
      this.meta = data.meta;
    }, err => {
      // if (err instanceof HttpErrorResponse) {
      //   if (err.status === 401 || err.status === 500) {
      //     this.router.navigate(['content/login']);
      //   }
      // }
    });

    // this.http.db({
    //   action: 'find',
    //   collection: 'galleryCategories',
    // }).subscribe(data => {
    //   this.categories = data;
    //   console.log(data);
    // }, err => {
    //   // if (err instanceof HttpErrorResponse) {
    //   //   if (err.status === 401 || err.status === 500) {
    //   //     this.router.navigate(['content/login']);
    //   //   }
    //   // }
    // });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogConfirm, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        const options = {
          action: 'update',
          collection: 'categories',
          document: 'gallery',
          item: 'meta'
        };

        this.http.db(options, this.meta).subscribe(res => {
          if (!res.success) {
            this.snackBar.open('Грешка при запазването!', null, { duration: 5000, panelClass: ['snackbar-error'] });
          } else {
            this.snackBar.open('Успешно запазване!', null, { duration: 5000, panelClass: ['snackbar-success'] });
          }
        });
      }
    });
  }
}

@Component({
  selector: 'dialog-confirm',
  templateUrl: 'dialog-confirm.html',
})
export class DialogConfirm { }
