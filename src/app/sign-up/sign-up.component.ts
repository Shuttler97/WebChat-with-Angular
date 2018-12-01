import { Component, OnInit } from '@angular/core';
import {ApiBaseUrl} from '../services/apiBaseUrl';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  usernameControl = new FormControl(null, [Validators.required, Validators.email]);
  passwordControl = new FormControl(null, [Validators.required]);

  constructor(private apiService: ApiBaseUrl, private router: Router) {
    this.signUpForm = new FormGroup({
      email: this.usernameControl,
      password: this.passwordControl
    });

  }

  ngOnInit() {
  }

  signUp() {
    console.log('up');
    const data = this.signUpForm.value;
    return this.apiService.signUp(data).subscribe(res => console.log('success'));
  }
}
