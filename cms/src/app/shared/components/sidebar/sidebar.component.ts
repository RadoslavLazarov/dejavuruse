import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private http: HttpService, public authService: AuthService) { }
  pages: object;

  ngOnInit() {
    const query = {
      action: 'find',
      collection: 'categories',
      options: {
        option: 'sort',
        key: 'priorityCms',
        value: '1'
      },
      select: 'name url -_id',
    };

    this.http.db(query).subscribe(data => {
      this.pages = data;
      // console.log(this.pages);
    }, err => {
      // if (err instanceof HttpErrorResponse) {
      //   if (err.status === 401 || err.status === 500) {
      //     this.router.navigate(['content/login']);
      //   }
      // }
    });
  }

}
