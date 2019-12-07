import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FullwidthModule } from './layouts/fullwidth/fullwidth.module';
// import { UploadModule } from './upload/upload.module';
// import { TestComponent } from './test/test.component';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material Design
import {
  MatSliderModule,
  MatButtonModule,
  MatGridListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullwidthModule,
    // UploadModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // Material Design
    MatSliderModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [AuthService, AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
