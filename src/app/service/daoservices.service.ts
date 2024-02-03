import { Injectable } from '@angular/core';
import {AuthserviceService} from './authservice.service';
import {Todo} from '../todolist/todolist.component';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DaoservicesService {

  constructor(private authSerice: AuthserviceService , private httpClient: HttpClient) { }



  getAllTodos(username) {
   return  this.httpClient.get<Todo[]>(`http://localhost:8080/user/getAllTodos/${username}`);
  }

  getTodo(username , id)  {
    return this.httpClient.get<Todo>(`http://localhost:8080/user/getTodo/${username}/${id}`);

  }

  saveTodo(username , todo) {
    return this.httpClient.post(`http://localhost:8080/user/addTodo/${username}`, todo) ;
  }

  updateToDo(username , todo) {
     return this.httpClient.put(`http://localhost:8080/user/updateTodo/${username}`, todo) ;
  }

  deleteTodo(username , id) {
    return this.httpClient.delete(`http://localhost:8080/user/deleteTodo/${username}/${id}` ) ;
  }
  saveUserDetails(userdetails) {
    return this.httpClient.post(`http://localhost:8080/user/signup`, userdetails) ;
  }

  validateUserId(username, password) {
    return this.httpClient.get(`http://localhost:8080/user/login/${username}/${password}` ) ;
  }


}
