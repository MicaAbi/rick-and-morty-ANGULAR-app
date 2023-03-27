import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { UserRegisterPost } from '../../interfaces/userRegisterPost.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: UserRegisterPost = {
    name: '',
    mail: '',
    password: ''
  }

  passwordCheck: string = ''

  nameMessage: string = ''
  emailMessage: string = ''
  passwordMessage: string = ''
  passwordChekMessage: string = ''

  get registerStatus(): string {
    let status: string = ''
    this.authService.getRegisterStatus().subscribe(resp => status = resp)
    return status
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.isAutenticated()) {
      this.router.navigate(['/rm/characters'])
    }
  }

  correctName(): boolean {
    const name: string = this.newUser.name

    if(name === '') {
      this.nameMessage = 'Required field'
      return false
    }

    if(name.length < 5 || name.length > 15) {
      this.nameMessage = 'Name must contain at least 5 characters and less than 15'
      return false
    }

    this.nameMessage = ''
    return true

  }

  correctEmail(): boolean {
    const mail: string = this.newUser.mail

    if(mail === '') {
      this.emailMessage = 'Required field'
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
    const password: string = this.newUser.password

    if(password === '') {
      this.passwordMessage = 'Required field'
      return false
    }

    if(password.length < 8 || password.length > 30) {
      this.passwordMessage = 'Password must contain at least 8 characters and less than 30'
      return false
    }

    this.passwordMessage = ''
    return true

  }

  correctPasswordCheck(): boolean {
    if(this.passwordCheck === '') {
      this.passwordChekMessage = 'Please repeat the password'
      return false
    }

    if(this.passwordCheck !== this.newUser.password) {
      this.passwordChekMessage = 'The value entered does not match your password'
      return false
    }

    this.passwordChekMessage = ''
    return true

  }

  registerUser():void {

    let validations: boolean = this.correctName() && this.correctEmail() && this.correctPassword() && this.correctPasswordCheck()

    if(validations) {
      this.authService.register(this.newUser)
    } else {
      this.correctName()
      this.correctEmail()
      this.correctPassword()
      this.correctPasswordCheck()
    }

  }

}
