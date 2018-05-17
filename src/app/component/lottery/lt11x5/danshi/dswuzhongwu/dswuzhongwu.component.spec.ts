import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DswuzhongwuComponent } from './dswuzhongwu.component';

describe('DswuzhongwuComponent', () => {
  let component: DswuzhongwuComponent;
  let fixture: ComponentFixture<DswuzhongwuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DswuzhongwuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DswuzhongwuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
