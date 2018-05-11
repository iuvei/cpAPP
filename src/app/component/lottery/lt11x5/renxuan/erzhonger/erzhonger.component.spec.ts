import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErzhongerComponent } from './erzhonger.component';

describe('ErzhongerComponent', () => {
  let component: ErzhongerComponent;
  let fixture: ComponentFixture<ErzhongerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErzhongerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErzhongerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
