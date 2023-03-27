import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { LoginResponse } from '../interfaces/loginResponse.interface';
import { RegisterResponse } from '../interfaces/registerResponse.interface';
import { UserLoginPost } from '../interfaces/userLoginPost.interface';
import { UserRegisterPost } from '../interfaces/userRegisterPost.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth_api_url: string = 'https://api-auth-moby.herokuapp.com/api/user'
  private _loginStatus: string = ''
  private _registerStatus: string = ''

  constructor( 
    private http: HttpClient, 
    private router: Router
  ) {}

  getLoginStatus(): Observable<string> {
    return of(this._loginStatus)
  }

  getRegisterStatus(): Observable<string> {
    return of(this._registerStatus)
  }

  login(authData: UserLoginPost): void {
    this.http
      .post<LoginResponse>(`${this.auth_api_url}/login`, authData)
      .subscribe({
        next: resp => {
          if(resp.header.resultCode === 0) {
            this._loginStatus = 'Ok'
            this._registerStatus = ''
            this.saveToken(resp.data.token)
            this.router.navigate(['/rm/characters'])
          } else {
            this._loginStatus = 'Invalid credentials'
          }
        }, 
        error: err => {
          this._loginStatus = 'Invalid credentials'
          console.log(err)
        }
      })
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token)
  }

  isAutenticated(): boolean {
    let token = localStorage.getItem('token')

    return token!=null && token!==''
  }

  logout(): void {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

  register(newUser: UserRegisterPost): void {
    this.http
      .post<RegisterResponse>(`${this.auth_api_url}/register`, newUser)
      .subscribe({
        next: resp => {
          if (resp.header.resultCode === 0) {
            this._registerStatus = 'Ok'
            this.router.navigate(['/login'])
          }
        },
        error: err => {
          this._registerStatus = err.error.header.error
          console.log(err)
        }
      })
  }

}
