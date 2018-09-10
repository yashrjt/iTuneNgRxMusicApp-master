import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {mergeMap, map, catchError, tap, switchMap} from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as MusicActions from './actions/music.action';
import {MusicService} from '../music.service';
import {MusicActionTypes} from './actions/music.action';

@Injectable()
export class MusicEffects {

  constructor(private musicService: MusicService,
              private actions$: Actions) {}


  @Effect()
  getMusic$: Observable<Action> = this.actions$.pipe(
    ofType(MusicActionTypes.GetMusic),
    map((action: MusicActions.GetMusic) => {
      console.log('search val: ', action.payload);
      return action.payload;}),
    mergeMap((music: string) =>
      this.musicService.getMusic(music).pipe(
        map(data => (new MusicActions.GetSuccess(data))),
        catchError(err => of(new MusicActions.GetFail(err)))
      )

   ));

  // @Effect()
  // getMusic$: Observable<Action> = this.actions$.pipe(
  //   ofType(MusicActions.MusicActionTypes.GetMusic),
  //   switchMap(action =>
  //     this.musicService.getMusic('jones').pipe(
  //       map(data => (new MusicActions.GetSuccess(data))),
  //       catchError(err => of(new MusicActions.GetFail(err)))
  //     )
  //   )
  // );

}
