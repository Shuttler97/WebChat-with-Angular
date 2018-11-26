import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-message-bar',
  templateUrl: './message-bar.component.html',
  styleUrls: ['./message-bar.component.css'],
})
export class MessageBarComponent implements OnInit {
  @ViewChild('inputText') inputText;
  @Output() addNewMessage = new EventEmitter<string>();
  emoji: Array <string> = [];
  input = '';
  typeEmoji = false;

  constructor() {
  }

  ngOnInit() {
  }
  showEmoji(){
    this.typeEmoji=!this.typeEmoji;
  }
  addEmoji(data) {
    console.log(data);
    this.emoji = data.emoji.native;
    this.input = this.inputText.nativeElement.value + this.emoji;
  }
  addMessage() {
    if (!!this.input) {
      this.addNewMessage.emit(this.input);
      }
    this.input = null;
  }

}
