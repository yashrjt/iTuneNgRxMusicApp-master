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

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface State {
   router: fromRouter.RouterReducerState<RouterStateUrl>;
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
};

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
