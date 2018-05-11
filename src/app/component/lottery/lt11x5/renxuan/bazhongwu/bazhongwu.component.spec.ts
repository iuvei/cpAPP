import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BazhongwuComponent } from './bazhongwu.component';

describe('BazhongwuComponent', () => {
  let component: BazhongwuComponent;
  let fixture: ComponentFixture<BazhongwuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BazhongwuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BazhongwuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
