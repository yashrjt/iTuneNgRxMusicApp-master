import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {LoginComponent} from './login/login.component';
import {AuthFormComponent} from './auth-form/auth-form.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
    /*StoreModule.forFeature('music', ),*/
   /* EffectsModule.forFeature(
      [MusicEffects]
    )*/
  ],
  declarations: [
   LoginComponent,
    AuthFormComponent
  ],
  exports: [
    LoginComponent,
    AuthFormComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AuthModule { }

