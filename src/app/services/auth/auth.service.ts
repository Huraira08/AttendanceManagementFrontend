import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAdminLoggedIn = true
  constructor() { }

  setAdmin(isAdminLoggedIn: boolean){
    this.isAdminLoggedIn = isAdminLoggedIn;
  }

  isAdmin(){
    return this.isAdminLoggedIn
  }
}
