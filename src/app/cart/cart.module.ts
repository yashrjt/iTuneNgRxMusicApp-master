import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {cartReducer} from './store/cart.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('cart', cartReducer),
  ],
  declarations: []
})
export class CartModule { }
