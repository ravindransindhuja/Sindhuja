import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DaoservicesService} from "../service/daoservices.service";
import {Todo} from "../todolist/todolist.component";

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {

  title: string ;
  action: string;
  message: string;

  todo: Todo = new Todo(null, '' , false , new Date()) ;
  constructor(private activatedroute: ActivatedRoute,
              private routes: Router,
              private dao: DaoservicesService) { }

  ngOnInit() {
    this.action = this.activatedroute.snapshot.params['action'] ;
    if (this.action === 'Add') {
      this.title = this.activatedroute.snapshot.params['action'] + ' new todo';
    } else {
      this.title = this.activatedroute.snapshot.params['action'] + '  todo';
    }



  if (this.action !== 'Add') {
    const username = sessionStorage.getItem('username');
    const id = this.activatedroute.snapshot.params['id'] ;
    this.dao.getTodo(username, id).subscribe(
      response => this.todo = response);
  }

  }

  addUpdate() {
    const username = sessionStorage.getItem('username');
    if (this.action !== 'Add') {
      this.dao.updateToDo(username, this.todo).subscribe(
        response => this.message = 'Updated Todo ' + this.todo.id
      );
    } else {
      this.dao.saveTodo(username, this.todo).subscribe(
        response => this.message = 'Added Todo ' + this.todo.id
      );
    }
    this.routes.navigate(['/todolist']);
  }
}
