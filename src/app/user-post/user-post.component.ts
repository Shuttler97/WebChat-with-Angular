import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
  posts:Array<string> = [];
  newPost: string;
  constructor() { }

  ngOnInit() {
  }
 updatePost(data:string){
    this.newPost=data;
    if (this.newPost)
    this.posts.push(this.newPost);

    }
    //upadate image in firebase
    // updateImage(image){
    // this.selectedImage=image;
    // console.log(this.selectedImage);
    //
    //
    // }
}
