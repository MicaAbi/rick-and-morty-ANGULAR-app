import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';

import { AuthService } from '../../services/auth.service';
import { UserLoginPost } from '../../interfaces/userLoginPost.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserLoginPost = {
    mail: "",
    password: "",
  }

  emailMessage: string = ''
  passwordMessage: string = ''

  messages: Message[] = [
    { severity: 'success', summary: 'User created successfully', detail: '' },
  ]
  
  get loginStatus(): string {
    let status: string = ''
    this.authService.getLoginStatus().subscribe(resp => status = resp)
    return status
  }

  get registerStatus(): string {
    let status: string = ''
    this.authService.getRegisterStatus().subscribe(resp => status = resp)
    return status
  }

  constructor( 
    private authService: AuthService,
    private router: Router
  ){}

  ngOnInit(): void {
    if (this.authService.isAutenticated()) {
      this.router.navigate(['/rm/characters'])
    }
  }

  correctEmail(): boolean {
    const mail: string = this.user.mail

    if(mail === '') {
      this.emailMessage = 'Email cannot be empty'
      return false
    }

    if(!mail.includes('@')) {
      this.emailMessage = 'You must complete with a valid email'
      return false
    }

    if(mail.length < 10 || mail.length > 50) {
      this.emailMessage = 'Email must be more than 10 characters and less than 50'
      return false
    }

    this.emailMessage = ''
    return true

  }

  correctPassword(): boolean {
    const password: string = this.user.password

    if(password === '') {
      this.passwordMessage = 'Password cannot be empty'
      return false
    }

    if(password.length < 8 || password.length > 30) {
      this.passwordMessage = 'Password must contain at least 8 characters and less than 30'
      return false
    }

    this.passwordMessage = ''
    return true

  }

  loginUser(): void {

    if(this.correctEmail() && this.correctPassword()) {
      this.authService.login(this.user)
    } else {
      this.correctEmail()
      this.correctPassword()
    }

  }

}
