import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DssizhongsiComponent } from './dssizhongsi.component';

describe('DssizhongsiComponent', () => {
  let component: DssizhongsiComponent;
  let fixture: ComponentFixture<DssizhongsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DssizhongsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DssizhongsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
