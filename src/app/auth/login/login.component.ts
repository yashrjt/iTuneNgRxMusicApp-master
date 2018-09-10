import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  constructor(private authService: AuthService ,
              private router: Router
  ) { }

  login(loginForm: NgForm ){

    if(loginForm && loginForm.valid){
      const username: string = loginForm.form.value.username;
      const pwd: string = loginForm.form.value.password;
      this.authService.logIn(username, pwd );

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/music']);
      }
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }


  ngOnInit() {
  }


}


