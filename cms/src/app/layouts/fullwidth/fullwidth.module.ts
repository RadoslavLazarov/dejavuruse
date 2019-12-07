import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullwidthComponent } from './fullwidth.component';
import { LoginComponent } from '../../modules/login/login.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    FullwidthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class FullwidthModule { }
