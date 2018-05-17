import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsyizhongyiComponent } from './dsyizhongyi.component';

describe('DsyizhongyiComponent', () => {
  let component: DsyizhongyiComponent;
  let fixture: ComponentFixture<DsyizhongyiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsyizhongyiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsyizhongyiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
