import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DssanzhongsanComponent } from './dssanzhongsan.component';

describe('DssanzhongsanComponent', () => {
  let component: DssanzhongsanComponent;
  let fixture: ComponentFixture<DssanzhongsanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DssanzhongsanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DssanzhongsanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
