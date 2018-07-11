import { Component, OnInit } from '@angular/core';
import { DiaorsServiceService } from '../../providers/diaors-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts; //post array

  //Inputs binding
  postTitle:string;
  postUserName:string;
  postContent:string;

  constructor(public diaorsServiceService:DiaorsServiceService) { }

  ngOnInit() {
    this.diaorsServiceService.getPosts().subscribe((res)=>{
      console.log(res);
      this.posts = res;
    });
  }

  submitPost()
  {

    // {
      
    //     "title": "Second Message",
    //     "body": "The Second message for people around the world",
    //     "likes": 8,
    //       "created_by": "tianqi gong"
    //   }
      
    var postPackage = {
      "title": this.postTitle,
      "body": this.postTitle,
      "likes": 0,
      "created_by": this.postTitle
    };

    console.log(postPackage);

    this.diaorsServiceService.sendPost(postPackage).subscribe((res)=>{
      console.log(res);
    });
  }

}
