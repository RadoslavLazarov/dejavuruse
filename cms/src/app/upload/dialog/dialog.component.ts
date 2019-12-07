import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadService } from '../upload.service';
import { forkJoin } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @ViewChild('file', { static: false }) file;

  public files: Set<File> = new Set();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogComponent>, public uploadService: UploadService, private snackBar: MatSnackBar) { }

  ngOnInit() { }

  progress;
  canBeClosed = true;
  primaryButtonText = 'Качи';
  showCancelButton = true;
  uploading = false;
  uploadSuccessful = false;
  enableUploadButton = false;
  mutiple = true;

  onFilesAdded() {
    const files = this.file.nativeElement.files;

    for (let i = 0; i < files.length; i++) {
      // check file size
      if (files[i].size <= this.data.config.maxFileSize) {
        if (!this.data.config.multiple) {
          this.mutiple = false;
        }
        this.enableUploadButton = true;
        this.files.add(files[i]);
      } else {
        this.snackBar.open(`Твърде голям файл!`, null, { duration: 5000, panelClass: ['snackbar-error'] });
      }
    }
  }

  addFiles() {
    this.file.nativeElement.click();
  }

  closeDialog() {
    // if everything was uploaded already, just close the dialog
    if (this.uploadSuccessful) {
      return this.dialogRef.close();
    }

    // set the component state to "uploading"
    this.uploading = true;

    // start the upload and save the progress map
    this.progress = this.uploadService.upload(this.files, this.data.config);
    console.log(this.progress);
    for (const key in this.progress) {
      this.progress[key].progress.subscribe(val => console.log(val));
    }

    // convert the progress map into an array
    let allProgressObservables = [];
    for (let key in this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }

    // Adjust the state variables

    // The OK-button should have the text "Finish" now
    this.primaryButtonText = 'Готово';

    // The dialog should not be closed while uploading
    this.canBeClosed = false;
    this.dialogRef.disableClose = true;

    // Hide the cancel-button
    this.showCancelButton = false;

    // When all progress-observables are completed...
    forkJoin(allProgressObservables).subscribe(end => {
      // ... the dialog can be closed again...
      console.log('test', end);
      this.canBeClosed = true;
      this.dialogRef.disableClose = false;

      // ... the upload was successful...
      this.uploadSuccessful = true;

      // ... and the component is no longer uploading
      this.uploading = false;
    });
  }

}
