import * as fromMusic from '../music/store/reducer/music.reducer';
import * as fromCart from '../cart/store/cart.reducer';
import {ShoppingCart} from '../cart/store/cart.reducer';
export interface State {
  Music: fromMusic.MusicState;
  Cart: fromCart.ShoppingCart;
}


