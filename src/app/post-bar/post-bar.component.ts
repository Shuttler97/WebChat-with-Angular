import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {MatDialog} from "@angular/material";
import {AddPostComponent} from "../add-post/add-post.component";

@Component({
  selector: 'app-post-bar',
  templateUrl: './post-bar.component.html',
  styleUrls: ['./post-bar.component.css']
})
export class PostBarComponent implements OnInit {
  @ViewChild('inputText') inputText;
  @Output() addNewPost = new EventEmitter<string>();
  @Output() addImage = new EventEmitter();
  postText:'';

  constructor(public dialog: MatDialog) {

  }

  emoji: Array <string> = [];
  input = null;


    addEmoji(data) {
    this.emoji = data.emoji.native;
    this.input = this.inputText.nativeElement.value + this.emoji;
  }
  openDialog() {
    let dialogRef = this.dialog.open(AddPostComponent, {
      height: '270px',
      width: '570px',
      position: {top: '4%', left: '25%'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`DialogClosed: ${result}`);
      this.postText = result;
      this.addNewPost.emit(this.postText);
    })
  }
  ngOnInit() {

  }
    // on input image
//   onFileInput(image){
//     console.log(image);
//     this.selectedFile = image.target.files[0];
// this.addImage.emit(this.selectedFile);
//   }

}
