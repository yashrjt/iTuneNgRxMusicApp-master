import {AuthActions, AuthActionTypes} from '../actions/auth.actions';


export interface AuthState {
  token: string;
  authenticated: boolean;
  error: boolean;
}

export const initialState: AuthState = {
  token: null,
  authenticated: false,
  error: false
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case(AuthActionTypes.SIGNUP):
     return {
       ...state,
       authenticated: true
      };
    case (AuthActionTypes.LOGIN_SUCCESS):
      return {
        ...state,
        authenticated: true,
      };
    case (AuthActionTypes.LOGIN_FAILED):
      return {
        ...state,
        error: true
      };
    case (AuthActionTypes.LOGOUT):
      return {
        ...state,
        authenticated: false
      };
     default:
      return state;
    }

  }



