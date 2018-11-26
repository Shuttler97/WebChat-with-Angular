import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-chat-message-box',
  templateUrl: './chat-message-box.component.html',
  styleUrls: ['./chat-message-box.component.css']
})
export class ChatMessageBoxComponent implements OnInit {
   now = moment().format('LT');
  constructor() {
    }

  ngOnInit() {
  }
}
