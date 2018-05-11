import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YizhongyiComponent } from './yizhongyi.component';

describe('YizhongyiComponent', () => {
  let component: YizhongyiComponent;
  let fixture: ComponentFixture<YizhongyiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YizhongyiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YizhongyiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
