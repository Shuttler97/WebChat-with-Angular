import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @ViewChild('commentInput') commentInput: ElementRef;
  inputComment = '';
  time = '';
  comments: Array<string> = [];
  likebutton: boolean;
  smiley: boolean;
  button: boolean;
  heart_eyes: boolean;
  angry: boolean;
  sad: boolean;
  constructor() {
    this.button = true;
    const now = moment().format('LLLL');
    this.time = moment(now).fromNow();
  }

  ngOnInit() {
  }

  focusInput() {
    this.commentInput.nativeElement.focus();
  }

  commentPushed() {
    this.inputComment = this.commentInput.nativeElement.value;
    if (!!this.inputComment) {
      this.comments.push(this.inputComment);
    }
    this.commentInput.nativeElement.value = null;
  }

  thumbsupclicked() {
    this.button = false;
    this.likebutton = true;
    this.smiley =  false;
    this.angry = false;
    this.sad = false;
    this.heart_eyes = false;
  }
  smileyclicked() {
    this.button = false;
    this.smiley = true;
    this.angry = false;
    this.sad = false;
    this.heart_eyes = false;
    this.likebutton = false;
  }
  angryclicked() {
    this.button = false;
    this.smiley = false;
    this.angry = true;
    this.sad = false;
    this.heart_eyes = false;
    this.likebutton = false;
  }
  sadclicked() {
    this.button = false;
    this.smiley = false;
    this.angry = false;
    this.sad = true;
    this.heart_eyes = false;
    this.likebutton = false;
  }
  heartclicked() {
    this.button = false;
    this.smiley = false;
    this.angry = false;
    this.sad = false;
    this.heart_eyes = true;
    this.likebutton = false;
  }
  likebuttonclicked(){
    this.button = false;
    this.likebutton = true;
  }
  unlikebuttonclicked(){
    this.button = true;
    this.likebutton = false;
  }
}


