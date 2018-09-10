import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicShellComponent } from './music-shell.component';

describe('MusicShellComponent', () => {
  let component: MusicShellComponent;
  let fixture: ComponentFixture<MusicShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
