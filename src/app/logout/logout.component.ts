import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from "../service/authservice.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public authService: AuthserviceService) { }

  ngOnInit() {
    this.authService.logout();
  }

}
