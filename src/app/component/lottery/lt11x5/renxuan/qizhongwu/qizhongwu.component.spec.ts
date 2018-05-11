import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QizhongwuComponent } from './qizhongwu.component';

describe('QizhongwuComponent', () => {
  let component: QizhongwuComponent;
  let fixture: ComponentFixture<QizhongwuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QizhongwuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QizhongwuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
