import * as fromRouter from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {ActivatedRouteSnapshot, Params, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {RouterStateSerializer} from '@ngrx/router-store';
import {localStorageSync} from 'ngrx-store-localstorage';
import * as fromMusic from '../../music/store/reducer/music.reducer';
import * as fromCart from '../../cart/store/cart.reducer';



export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  music: fromMusic.MusicState;
  cart: fromCart.ShoppingCart;
}

@Injectable()
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route: ActivatedRouteSnapshot = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }
    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}
export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  music: fromMusic.reducer,
  cart: fromCart.cartReducer
};

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['music', 'cart'], rehydrate: true})(reducer);
}
export const metaReducers: MetaReducer<State>[] =  [localStorageSyncReducer];
