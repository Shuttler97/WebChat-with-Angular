import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CommentsComponent} from '../comments/comments.component';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  @ViewChild('replyInput') replyInput;
  reply = '';
  @Output() pushReply = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  replyPushed() {
    this.reply = this.replyInput.nativeElement.value;
    if (!!this.reply) {
      this.pushReply.emit(this.reply);
    }
    this.reply = null;
  }
}

