import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { IUser } from 'src/app/interfaces/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

    constructor(private formBuilder: FormBuilder,
      private AuthenticationService: AuthenticationService) {

    }

    messageNotice : {status: boolean | null, message: string | null} = {status: null, message: null};

    //css
    login() {
      const x:any = document.getElementById('login');
      const y:any = document.getElementById('register');
      const z:any = document.getElementById('btn');
      x.style.left = '50px';
      y.style.left = '450px';
      z.style.left = '0px';
      this.messageNotice = {status: null, message: null}
    }
  
    register() {
      const x:any = document.getElementById('login');
      const y:any = document.getElementById('register');
      const z:any = document.getElementById('btn');
      x.style.left = '-400px';
      y.style.left = '50px';
      z.style.left = '130px';
      this.messageNotice = {status: null, message: null}
    }

    handleFormSignUp = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      confirmPassword: ['']
    })

    handleFormSignIn = this.formBuilder.group({
      email: [''],
      password: ['']
    })

    onHandleSignIn(){
      const userSignIn: IUser = {
        email: this.handleFormSignIn.value.email  || "",
        password: this.handleFormSignIn.value.password  || "",
      }
      this.AuthenticationService.userSignIn(userSignIn).subscribe(data => {
          this.messageNotice = {status: true, message: data.message}
          const {user, accessToken} = data;
          localStorage.setItem('user', JSON.stringify(user, user.accessToken = accessToken));
          window.location.href = '/'
      },
      error => {
        this.messageNotice = {status: false, message: error.error.message}
      })
    }

    onHandleSignUp(){
      const userSignUp: IUser = {
        name: this.handleFormSignUp.value.name || "",
        email: this.handleFormSignUp.value.email  || "",
        password: this.handleFormSignUp.value.password  || "",
        confirmPassword: this.handleFormSignUp.value.confirmPassword  || ""
      }
      this.AuthenticationService.userSignUp(userSignUp).subscribe(data => {
        this.messageNotice = {status: true, message: data.message}
      },
      (error) => {
        this.messageNotice = {status: false, message: error.error.message}
      })
    }
}
