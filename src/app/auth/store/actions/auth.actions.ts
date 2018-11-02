import { Action } from '@ngrx/store';
import {User} from '../../models/user';

export enum AuthActionTypes {
   LOGIN = 'LOGIN',
   LOGIN_SUCCESS = 'LOGIN_SUCCESS',
   LOGIN_FAILED = 'LOGIN_FAILED',
   LOGOUT = 'LOGOUT',
   SIGNUP= 'SignUp',
   SET_TOKEN = 'SET_TOKEN'
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SIGNUP;
  constructor(public payload: User) {}
}
export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: User) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILED;
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export class SetToken implements Action {
  readonly type = AuthActionTypes.SET_TOKEN;

  constructor(public payload: string) {}
}

export type AuthActions = SignUp | Login | LoginSuccess | LoginFailed | Logout ;
