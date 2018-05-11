import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtHeaderComponent } from './lt-header.component';

describe('LtHeaderComponent', () => {
  let component: LtHeaderComponent;
  let fixture: ComponentFixture<LtHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
