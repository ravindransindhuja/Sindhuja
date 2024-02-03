import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DaoservicesService} from "../service/daoservices.service";
import {Userdetails} from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   /*userdetails: Userdetails = new Userdetails(null, null , null , null ); */
  username: string;
  password: string;
  constructor(private router: Router,
              private dao: DaoservicesService) { }

  ngOnInit() {
  }
  login() {
    this.dao.validateUserId(this.username,this.password).subscribe(
      response =>  {
        sessionStorage.setItem( 'username' , this.username);
        this.router.navigate([`/welcome/${this.username}`]);
      }
  );
  }

}
