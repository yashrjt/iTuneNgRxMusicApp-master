import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import * as fromRoot from '../state/app.state';
import {select, Store} from '@ngrx/store';
import {takeWhile} from 'rxjs/operators';
import * as fromCart from './store/';
import * as MusicActions from '../music/store/actions/music.action';
import * as CartActions from './store/cart.actions';
import {current} from 'codelyzer/util/syntaxKind';
import {Router} from '@angular/router';
import {MusicItem} from './musicItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  fav$: Observable<any[]>;
  items: MusicItem[] ;
  componentActive = true;
  price: number;

  constructor(private store: Store<fromRoot.State>, private route: Router) { }

  ngOnInit() {
    /*this.store.pipe(
      select(fromCart.getCartItems),
      takeWhile(() => this.componentActive)
    ).subscribe(
      x => this.items = x
    );
    this.price = this.items.map(x => x.trackPrice).reduce((acc, currentValue) =>
      acc + currentValue);
    console.log('price:', this.price);*/
     this.store.pipe(select(fromCart.getCartItems),
       takeWhile(() => this.componentActive))
       .subscribe(x => this.items = x);
    this.store.pipe(select(fromCart.getSum),
      takeWhile(() => this.componentActive))
      .subscribe(x => this.price = x);

  }

  ngOnDestroy() {
    this.componentActive = false;
  }
  // deleteItem(music) {
  //   if ( confirm('Remove ' + music.trackName + ' from cart?')) {
  //     this.store.dispatch(new CartActions.DeleteItem(music));
  //   }
  //   this.price = this.items.map(x => x.trackPrice).reduce((acc, currentValue) =>
  //     acc + currentValue);
  //   console.log('price:', this.price);
  // }
  addQty(item) {
    if (confirm('add ' + item.trackName + ' to cart?')) {
      this.store.dispatch(new CartActions.AddToCart(item));
    }
    this.store.pipe(select(fromCart.getSum),
      takeWhile(() => this.componentActive))
      .subscribe(x => this.price = x);
  }
removeQty(item){
  if ( confirm('Remove ' + item.trackName + ' from cart?')) {
    this.store.dispatch(new CartActions.DeleteItem(item));
  }
  this.store.pipe(select(fromCart.getSum),
    takeWhile(() => this.componentActive))
    .subscribe(x => this.price = x);
}

}
