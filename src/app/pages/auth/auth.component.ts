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

    constructor(private formSignUp: FormBuilder,
      private formSignIn: FormBuilder,
      private AuthenticationService: AuthenticationService) {

    }

    messageSignUp: string = ''
    messageSignIn: string = ''

    //css
    login() {
      const x:any = document.getElementById('login');
      const y:any = document.getElementById('register');
      const z:any = document.getElementById('btn');
      x.style.left = '50px';
      y.style.left = '450px';
      z.style.left = '0px';
      this.messageSignUp = ''
    }
  
    register() {
      const x:any = document.getElementById('login');
      const y:any = document.getElementById('register');
      const z:any = document.getElementById('btn');
      x.style.left = '-400px';
      y.style.left = '50px';
      z.style.left = '130px';
      this.messageSignIn = ''
    }

    handleFormSignUp = this.formSignUp.group({
      name: [''],
      email: [''],
      password: [''],
      confirmPassword: ['']
    })

    handleFormSignIn = this.formSignIn.group({
      email: [''],
      password: ['']
    })

    onHandleSignIn(){
      const userSignIn: IUser = {
        email: this.handleFormSignIn.value.email  || "",
        password: this.handleFormSignIn.value.password  || "",
      }
      this.AuthenticationService.userSignIn(userSignIn).subscribe(data => {
        if(data.status) {
          this.messageSignIn = data.message
          const accessToken = data.accessToken; // Lấy token từ phản hồi của server
          localStorage.setItem('accessToken', accessToken);
          window.location.href = '/'
        }
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
        if(data.status) {
          this.messageSignUp = data.message
        }
      })
    }
}
