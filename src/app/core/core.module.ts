import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {AuthguardService} from '../auth/services/authguard.service';
import {MusicShellComponent} from '../music/container/music-shell/music-shell.component';
import {MoreDetailComponent} from '../music/component/more-detail/more-detail.component';
import {AuthComponent} from '../auth/containers/auth/auth.component';
import {MyFavComponent} from '../music/container/my-fav/my-fav.component';
import {CartComponent} from '../cart/cart/cart.component';
import {CheckoutComponent} from '../cart/checkout/checkout.component';
import {RouterModule} from '@angular/router';

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
  {path: 'auth', component: AuthComponent},
  {
    path: 'fav',
    canActivate: [AuthguardService ],
    component: MyFavComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [NavBarComponent],
  declarations: [NavBarComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoreModule { }
