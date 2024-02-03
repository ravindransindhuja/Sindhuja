import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from "../service/authservice.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username: string ;

  constructor(public authService: AuthserviceService) { }

  ngOnInit() {

  }

}
