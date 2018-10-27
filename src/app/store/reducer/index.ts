import * as fromMusic from '../../music/store/reducer/music.reducer';
import * as fromCart from '../../cart/store/cart.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

export interface State {
  music: fromMusic.MusicState;
  cart: fromCart.ShoppingCart;
}

/*
export const reducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


*/
