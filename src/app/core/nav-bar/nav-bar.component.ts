import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/services/auth.service';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../store/reducer';
import * as fromMusic from '../../music/store/reducer';
import * as fromCart from '../../cart/store';
import * as fromAuth from '../../auth/store/reducers/auth.reducer';
import {Logout} from '../../auth/store/actions/auth.actions';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navbarCollapsed = true;
  val$: Observable<number>;
  cartCount$: Observable<number>;
  authState$: Observable<fromAuth.AuthState>;

  constructor(private router: Router,
              private authService: AuthService,
              private store: Store<fromRoot.State>,
              private authStore: Store<fromAuth.AuthState>) {
  }

  ngOnInit() {
    this.val$ = this.store.pipe(select(fromMusic.getCount));
    this.cartCount$ = this.store.pipe(select(fromCart.getCount));
    this.authState$ = this.store.select('auth');
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logOut(): void {
    /*this.authService.logOut();
    this.router.navigate(['/auth']);*/
    this.authStore.dispatch(new Logout());
  }
}
