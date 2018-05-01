import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { lt11x5 } from './lt11x5.component';

describe('11x5Component', () => {
  let component: lt11x5;
  let fixture: ComponentFixture<lt11x5>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ lt11x5 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(lt11x5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
