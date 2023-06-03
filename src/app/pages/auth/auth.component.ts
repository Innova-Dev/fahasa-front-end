import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
    //css
    login() {
      const x:any = document.getElementById('login');
      const y:any = document.getElementById('register');
      const z:any = document.getElementById('btn');
      x.style.left = '50px';
      y.style.left = '450px';
      z.style.left = '0px';
    }
  
    register() {
      const x:any = document.getElementById('login');
      const y:any = document.getElementById('register');
      const z:any = document.getElementById('btn');
      x.style.left = '-400px';
      y.style.left = '50px';
      z.style.left = '130px';
    }
}
