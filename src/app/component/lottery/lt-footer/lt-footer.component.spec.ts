import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtFooterComponent } from './lt-footer.component';

describe('LtFooterComponent', () => {
  let component: LtFooterComponent;
  let fixture: ComponentFixture<LtFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
