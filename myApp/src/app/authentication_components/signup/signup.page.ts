import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  compName : string;
  email     : string;
  username  : string;
  password  : string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //function to add the new user to the users database
  register() {
    let compName = this.compName;
    let email = this.email;
    let username = this.username;
    let password = this.password;

    alert('Welcome ' + username);
    this.router.navigateByUrl('home');
  }

  // function to navigate to the login page
  login() {
    this.router.navigateByUrl('login');
  }

}
