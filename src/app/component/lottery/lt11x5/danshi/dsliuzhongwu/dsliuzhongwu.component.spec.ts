import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsliuzhongwuComponent } from './dsliuzhongwu.component';

describe('DsliuzhongwuComponent', () => {
  let component: DsliuzhongwuComponent;
  let fixture: ComponentFixture<DsliuzhongwuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsliuzhongwuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsliuzhongwuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
