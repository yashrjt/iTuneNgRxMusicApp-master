import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {select, Store} from '@ngrx/store';

import * as fromMusic from '../../store/reducer';
import {Observable} from 'rxjs';
import {takeWhile} from 'rxjs/operators';
import * as MusicActions from '../../store/actions/music.action';
import * as fromRoot from '../../../state/app.state';
@Component({
  selector: 'app-my-fav',
  templateUrl: './my-fav.component.html',
  styleUrls: ['./my-fav.component.css']
})
export class MyFavComponent implements OnInit, OnDestroy {
  fav$: Observable<any[]>;
  favorite: any[] ;
  componentActive = true;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
   // this.fav$ = this.store.pipe.subscribe(select(fromMusic.getFavorite));

    this.store.pipe(
      select(fromMusic.getFavorite),
      takeWhile(() => this.componentActive)
    ).subscribe(
      currentProduct => this.favorite = currentProduct
    );

  }

  ngOnDestroy() {
    this.componentActive = false;
  }
  deleteFav(music) {
    if ( confirm('Remove ' + music.trackName + ' from favorite?')) {
  this.store.dispatch(new MusicActions.DeleteFavorite(music) );
    }
 // alert(music.trackName + 'deleted');
  }

}
