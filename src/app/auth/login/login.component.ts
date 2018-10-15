import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {User} from '../user';

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

   ngOnInit() {
      }

 redirectUser(user: User ) {
    const username: string = user.email;
    const pwd: string = user.password;
    this.authService.logIn(username, pwd );
    if (this.authService.redirectUrl) {
      this.router.navigateByUrl(this.authService.redirectUrl);
    } else {
      this.router.navigate(['/music']);
    }
  }

  loginUser(user: User) {
    console.log(user);
    this.redirectUser(user);
     }
  createUser(user: User) {
    alert('Account created successfully created');
    this.redirectUser(user);
    }
}


