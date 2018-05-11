import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanzhongsanComponent } from './sanzhongsan.component';

describe('SanzhongsanComponent', () => {
  let component: SanzhongsanComponent;
  let fixture: ComponentFixture<SanzhongsanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanzhongsanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanzhongsanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
