import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsqizhongwuComponent } from './dsqizhongwu.component';

describe('DsqizhongwuComponent', () => {
  let component: DsqizhongwuComponent;
  let fixture: ComponentFixture<DsqizhongwuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsqizhongwuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsqizhongwuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
