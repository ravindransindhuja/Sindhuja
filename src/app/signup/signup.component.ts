import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DaoservicesService} from "../service/daoservices.service";

export class Userdetails {


  constructor(public username: string,
              public password: string,
              public age: number,
              public confirmpassword: string) {
  }

}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userdetails: Userdetails = new Userdetails(null , null, null , null);
  invalidpassword = false;
  error: string;

  constructor(private routes: Router,
              private dao: DaoservicesService) { }

  ngOnInit() {

  }

    register()  {
    if (this.userdetails.username !== null) {
      if (this.userdetails.password === this.userdetails.confirmpassword) {
        this.invalidpassword = false;
        this.dao.saveUserDetails(this.userdetails).subscribe(
          response => {
            this.routes.navigate(['/login']);
          }
        );
      } else {
        this.invalidpassword = true;
      }
    }

  }



}
