import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiBaseUrl} from '../services/apiBaseUrl';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sign = false;

  loginForm: FormGroup;
  usernameControl = new FormControl(null, [Validators.required, Validators.email]);
  passwordControl = new FormControl(null, [Validators.required]);

  constructor(private apiService: ApiBaseUrl, private router: Router) {
    this.loginForm = new FormGroup({
      email: this.usernameControl,
      password: this.passwordControl
    });

  }

  login() {
    console.log('api');
    this.apiService.login(this.usernameControl.value, this.passwordControl.value).subscribe(data => {
      localStorage.setItem('authKey', data.idToken);
      this.router.navigate(['/main']);
    }, error => {
      console.log('error', error);
    });

  }
  signUp(){
    this.router.navigate(['/signUp'])
  }

  ngOnInit() {
  }

  // startTime() {
  //   let today = new Date();
  //   let h = today.getHours();
  //   let m = today.getMinutes();
  //   let s = today.getSeconds();
  //   document.getElementById('txt').innerHTML =
  //     h + ':' + m + ':' + s;
  // }
}
