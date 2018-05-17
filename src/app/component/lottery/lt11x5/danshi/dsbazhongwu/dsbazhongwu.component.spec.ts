import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsbazhongwuComponent } from './dsbazhongwu.component';

describe('DsbazhongwuComponent', () => {
  let component: DsbazhongwuComponent;
  let fixture: ComponentFixture<DsbazhongwuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsbazhongwuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsbazhongwuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
