import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output() menuButtonClicked = new EventEmitter();
  // color = 'primary';
  // mode = 'indeterminate';
  // value = 50;
  // bufferValue = 75;

  // sideNav = {};

  constructor(public authService: AuthService) { }

  ngOnInit() {
    // this.sideNav = document.getElementById('sidenavv');
  }

}
