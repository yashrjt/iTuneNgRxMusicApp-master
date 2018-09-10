import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.css']
})
export class MusicDetailComponent implements OnInit {
  @Input() errorMessage: string;
  @Input() selectedMusic: any;
  @Output() fav = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit() {

  }
  moreDetail(trackId: number) {
       this.router.navigate(['/more-detail', trackId]);
  }
  addFav(data) {
    this.fav.emit(data);

  }
  detailRoute(id: number){

     this.router.navigate(['/detail'], { queryParams: { trackId: id } });
  }

}
