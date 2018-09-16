import * as fromMusic from '../music/store/reducer/music.reducer';
import * as fromCart from '../cart/store/cart.reducer';
import {ShoppingCart} from '../cart/store/cart.reducer';
import {ActionReducerMap} from '@ngrx/store';
import * as fromCartReducer from '../cart/store/cart.reducer';
import * as fromMusicReducer from '../music/store/reducer/music.reducer';
export interface State {
  music: fromMusic.MusicState;
  cart: fromCart.ShoppingCart;
}


