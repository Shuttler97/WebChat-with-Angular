import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  messages: Array<string> = [];
  newMessage: string;

  constructor() {
  }

  ngOnInit() {
  }

  updateMessage(data: string) {
    this.newMessage = data;
    this.messages.push(this.newMessage );
  }
}


