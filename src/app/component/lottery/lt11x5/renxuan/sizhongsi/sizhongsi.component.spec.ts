import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizhongsiComponent } from './sizhongsi.component';

describe('SizhongsiComponent', () => {
  let component: SizhongsiComponent;
  let fixture: ComponentFixture<SizhongsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizhongsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizhongsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
