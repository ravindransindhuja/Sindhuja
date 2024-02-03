import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   this.username = this.activatedRoute.snapshot.params['username'] ;
  }

}
