import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  usernameControl = new FormControl(null, [Validators.required, Validators.email]);
  passwordControl = new FormControl(null, [Validators.required]);
  constructor() {
    this.loginForm = new FormGroup({
      myUsername: this.usernameControl,
      passwordField: this.passwordControl
    });

  }

  ngOnInit() {
  }
   startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    document.getElementById('txt').innerHTML =
      h + ':' + m + ':' + s;
  }
}
