import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  start: boolean;
 show: boolean;
showReply = false;
  replies: Array<string> = [];
  reply = '';
  button: boolean;
  likebutton: boolean;

  constructor() {
    this.button = true;
    this.show = true;
    this.start = false;
  }

  ngOnInit() {
  }

  replyButtonClicked() {
    this.showReply = !this.showReply;

  }

  updateReply(data: string) {
    this.reply = data;
    this.replies.push(this.reply);
    this.showReply = false;
    this.start = true;
    this.show = true;
    }

  likebuttonclicked() {
    this.button = false;
    this.likebutton = true;
  }

  unlikebuttonclicked() {
    this.button = true;
    this.likebutton = false;
  }
  showallreply(){
    this.show = !this.show;
  }
}
