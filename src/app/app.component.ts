import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public openPopup: Function;
  public form: FormGroup;

  setPopupAction(fn: any) {
    this.openPopup = fn;
  }}
