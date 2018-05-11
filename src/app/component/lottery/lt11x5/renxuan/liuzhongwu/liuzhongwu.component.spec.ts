import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiuzhongwuComponent } from './liuzhongwu.component';

describe('LiuzhongwuComponent', () => {
  let component: LiuzhongwuComponent;
  let fixture: ComponentFixture<LiuzhongwuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiuzhongwuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiuzhongwuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
