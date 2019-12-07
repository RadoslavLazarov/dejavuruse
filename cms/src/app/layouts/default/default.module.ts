import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from '../../modules/home/home.component';
import { GalleryComponent, DialogConfirm } from '../../modules/gallery/gallery.component';
import { GalleryCategoryComponent } from '../../modules/gallery-category/gallery-category.component';
import { GalleryAlbumComponent } from '../../modules/gallery-album/gallery-album.component';
// import { GalleryComponent, DialogConfirm } from '../../modules/gallery/gallery.component';
import { TestComponent } from '../../modules/test/test.component';
import { SharedModule } from '../../shared/shared.module';
// import { UploadModule } from '../../upload/upload.module';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    GalleryComponent,
    GalleryCategoryComponent,
    GalleryAlbumComponent,
    DialogConfirm,
    TestComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    // UploadModule,
  ],
  entryComponents: [DialogConfirm]
})

export class DefaultModule { }
