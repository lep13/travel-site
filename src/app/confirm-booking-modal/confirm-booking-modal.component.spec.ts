import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmBookingModalComponent } from './confirm-booking-modal.component';

describe('ConfirmBookingModalComponent', () => {
  let component: ConfirmBookingModalComponent;
  let fixture: ComponentFixture<ConfirmBookingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmBookingModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmBookingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
