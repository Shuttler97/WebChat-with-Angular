import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {MainComponent} from './main/main.component';
import {UserPostComponent} from './user-post/user-post.component';
import {SignUpComponent} from './sign-up/sign-up.component';

export const myRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'post',
    component: UserPostComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  }
];

