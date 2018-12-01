import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  @ViewChild('inputText') text;
  postText = '';

  constructor(public dialogRef: MatDialogRef<AddPostComponent>) {
  }

  ngOnInit() {
  }

  postButtonClicked() {
    this.postText = this.text.nativeElement.value;
    this.dialogRef.close(this.postText);
  }
}

