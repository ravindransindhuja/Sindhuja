import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DaoservicesService} from "../service/daoservices.service";
import {getResponseURL} from "@angular/http/src/http_utils";
import {AuthserviceService} from "../service/authservice.service";

export class Todo {
  constructor(public id: number ,
              public description: string,
              public isCompleted: boolean,
              public targetDate: Date) {
  }
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todos: Todo[] ;
  message: string;

  constructor(private route: Router , private dao: DaoservicesService,
              private auth: AuthserviceService) {

    dao.getAllTodos(sessionStorage.getItem('username')).subscribe(
      response => this.todos = response);
  }

  ngOnInit() {
  }

  updateTodo(id: number) {
    this.route.navigate([`/todoform/Update/${id}`] );
  }

  deleteTodo( id: number ) {
    console.log('delete todo of : ' + id) ;
    this.dao.deleteTodo(this.auth.getUserName(), id ).subscribe(
      response => {
        console.log('deletedtodo');
        this.refreshTodos('Deleted Todo Successfully');
      });
  }

  addNewTodo() {
  this.route.navigate(['/todoform/Add'] );
  }

  refreshTodos(message) {
    this.dao.getAllTodos(sessionStorage.getItem('username')).subscribe(
      response1 => { this.todos = response1;
      this.message = message; }
    );
  }


}
