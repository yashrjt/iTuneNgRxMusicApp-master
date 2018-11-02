import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../store/reducer/index';
import {AuthActions, Login, SignUp} from '../../store/actions/auth.actions';
import * as fromAuth from '../../store/reducers/auth.reducer';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  errorMessage: string;
  constructor(private authService: AuthService ,
              private router: Router,
              private store: Store<fromAuth.AuthState>
  ) { }

   ngOnInit() {}

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
  /*this.redirectUser(user);*/
    this.store.dispatch(new Login(user));
  }
  createUser(user: User) {
   /* alert('Account created successfully created');
    this.redirectUser(user);*/
   this.store.dispatch(new SignUp(user));
  }
}


