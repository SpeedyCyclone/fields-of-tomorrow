import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StabalizerComponent } from './stabalizer.component';

describe('StabalizerComponent', () => {
  let component: StabalizerComponent;
  let fixture: ComponentFixture<StabalizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StabalizerComponent]
    });
    fixture = TestBed.createComponent(StabalizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
