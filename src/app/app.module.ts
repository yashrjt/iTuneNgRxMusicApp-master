import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { MusicShellComponent } from './music/container/music-shell/music-shell.component';
import { MyFavComponent } from './music/container/my-fav/my-fav.component';

import { environment } from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MusicService} from './music/services/music.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthguardService} from './auth/auth/authguard.service';
import {MusicModule} from './music/music.module';
import {MoreDetailComponent} from './music/component/more-detail/more-detail.component';
import { CartComponent } from './cart/cart.component';
import {CartModule} from './cart/cart.module';
import { CheckoutComponent } from './checkout/checkout.component';
import {AuthModule} from './auth/auth.module';
import {LoginComponent} from './auth/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {StoreRouterConnectingModule , RouterStateSerializer} from '@ngrx/router-store';
import {metaReducers, reducers, CustomSerializer} from './store/reducer';


const routes = [
  {
    path: 'music',
    canActivate: [AuthguardService ],
    component: MusicShellComponent
    // loadChildren: './music/music.module#MusicModule'
  },
  {
    path: 'detail',
    canActivate: [AuthguardService ],
    component: MoreDetailComponent
  },
 /* {path: 'auth', component: AuthFormComponent},*/
  {path: 'login', component: LoginComponent},
   {
     path: 'fav',
     canActivate: [AuthguardService ],
    component: MyFavComponent
   },
  {
    path: 'cart',
    canActivate: [AuthguardService ],
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MusicModule,
    CartModule,
    AuthModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      name: 'APM Demo App DevTools',
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([])
  ],
   providers: [MusicService, Location , {provide: RouterStateSerializer , useClass: CustomSerializer}],
  bootstrap: [AppComponent]
})

export class AppModule { }
