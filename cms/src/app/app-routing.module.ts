import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './layouts/default/default.component';
import { FullwidthComponent } from './layouts/fullwidth/fullwidth.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { TestComponent } from './modules/test/test.component';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { TestComponent } from './test/test.component';
import { AuthGuard } from './auth.guard';
import { GalleryComponent } from './modules/gallery/gallery.component';

// const routes: Routes = [
//   { path: 'content', component: HomeComponent, canActivate: [AuthGuard] },
//   { path: 'content/test', component: TestComponent },
//   { path: 'content/login', component: LoginComponent }
// ];

const routes: Routes = [{
  path: 'content',
  component: DefaultComponent,
  canActivate: [AuthGuard],
  children: [{
    path: '',
    component: HomeComponent
  }, {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  }]
}, {
  path: 'content',
  component: FullwidthComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
