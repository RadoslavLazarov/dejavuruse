import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse,
} from '@angular/common/http';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

const url = 'http://127.0.0.1:3000/content/server?action=upload';

@Injectable()
export class UploadService {
  constructor(private http: HttpClient) { }

  public upload(files: Set<File>, config: any): { [key: string]: { progress: Observable<number> } } {
    // this will be the our resulting map
    const status: { [key: string]: { progress: Observable<number> } } = {};
    console.log('triggered from upload function', config.url);
    files.forEach(file => {
      // create a new multipart-form for every file
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);

      // create a http-post request and pass the form
      // tell it to report the upload progress
      const req = new HttpRequest('POST', `http://127.0.0.1:3000/content/server?action=upload&filename=${config.fileName}&location=${config.location}${config.collection ? '&collection=' + config.collection : ''}${config.document ? '&document=' + config.document : ''}${config.item ? '&item=' + config.item : ''}`, formData, {
        reportProgress: true
      });

      // create a new progress-subject for every file
      const progress = new Subject<number>();

      // send the http-request and subscribe for progress-updates
      this.http.request(req).subscribe(event => {
        console.log('event: ', event);
        if (event.type === HttpEventType.UploadProgress) {

          // calculate the progress percentage
          const percentDone = Math.round(100 * event.loaded / event.total);

          // pass the percentage into the progress-stream
          progress.next(percentDone);
        } else if (event instanceof HttpResponse) {
          // Close the progress-stream if we get an answer form the API
          // The upload is complete
          progress.complete();
        }
      });

      // Save every progress-observable in a map of all observables
      status[file.name] = {
        progress: progress.asObservable()
      };
    });

    // return the map of progress.observables
    console.log('status: ', status);
    return status;
  }
}
