import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DserzhongerComponent } from './dserzhonger.component';

describe('DserzhongerComponent', () => {
  let component: DserzhongerComponent;
  let fixture: ComponentFixture<DserzhongerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DserzhongerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DserzhongerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
