import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  name:String;
  username:String;
  email:String;
  password:String;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToLoginPage(){
    console.log("login");
    this.navCtrl.push("LoginPage");
  }

  goToRegisterPage()
  {
    console.log("register");
    this.navCtrl.push("RegisterPage");
  }
}
