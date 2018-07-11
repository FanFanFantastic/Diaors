import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
//import 'rxjs/add/operator/map';


//import { Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class DiaorsServiceService {

  //URL Declaration
  postsUrl = "http://localhost:3000/post/list";
  sendPostUrl = "http://localhost:3000/post";

  constructor(public http:Http) { }

  getPosts() {
    return this.http.get(this.postsUrl).pipe(map(res => res.json()));
  }


  sendPost(postObject) {
    console.log(postObject);


    let postBody = JSON.stringify(postObject); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option


    return this.http.post(this.sendPostUrl, postBody, options).pipe(map(res => res.json()));
  }
}
