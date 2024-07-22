import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindPulseComponent } from './wind-pulse.component';

describe('WindPulseComponent', () => {
  let component: WindPulseComponent;
  let fixture: ComponentFixture<WindPulseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WindPulseComponent]
    });
    fixture = TestBed.createComponent(WindPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
