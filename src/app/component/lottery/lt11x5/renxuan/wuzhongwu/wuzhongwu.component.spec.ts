import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WuzhongwuComponent } from './wuzhongwu.component';

describe('WuzhongwuComponent', () => {
  let component: WuzhongwuComponent;
  let fixture: ComponentFixture<WuzhongwuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WuzhongwuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WuzhongwuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
