import * as fromMusic from '../music/store/reducer/music.reducer';
import * as fromCart from '../cart/store/cart.reducer';

export interface State {
  music: fromMusic.MusicState;
  cart: fromCart.ShoppingCart;
}


