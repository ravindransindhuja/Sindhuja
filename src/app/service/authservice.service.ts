import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {


  constructor() { }

  loggedIn() {
    if (sessionStorage.getItem('username') !== null) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    sessionStorage.removeItem('username') ;
  }

  getUserName() {
  return sessionStorage.getItem('username') ;
}
}
