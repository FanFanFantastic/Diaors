import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchbarActive = false;

  constructor(public navCtrl: NavController) {

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

  presentSearchNavbar()
  {
    this.searchbarActive = !this.searchbarActive;
  }

}
