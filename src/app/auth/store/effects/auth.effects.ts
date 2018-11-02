import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {AuthActions, AuthActionTypes} from '../actions/auth.actions';
import {MusicActionTypes} from '../../../music/store/actions/music.action';
import * as MusicActions from '../../../music/store/actions/music.action';
import {of} from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';


@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions ,
              private authService: AuthService,
              private router: Router) {}

               }
