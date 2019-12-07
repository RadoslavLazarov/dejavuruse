import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UploadModule } from '../upload/upload.module';

// Material Design
import {
  MatSliderModule,
  MatButtonModule,
  MatGridListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatTabsModule,
  MatIconModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatTooltipModule,
  MatDialogModule,
  MatSnackBarModule,
  MatNativeDateModule
} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    // Material Design
    MatSliderModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    UploadModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    SidebarComponent,
    // Material Design
    MatSliderModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    UploadModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class SharedModule { }
