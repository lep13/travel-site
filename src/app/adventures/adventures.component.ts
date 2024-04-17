// adventures.component.ts
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ConfirmBookingModalComponent } from '../confirm-booking-modal/confirm-booking-modal.component';

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.scss']
})
export class AdventuresComponent implements AfterViewInit {
  @ViewChild(ConfirmBookingModalComponent) confirmModal: ConfirmBookingModalComponent;

  ngAfterViewInit(): void {
    // Additional initialization can go here if needed
  }

  openConfirmBookingModal(): void {
    if (this.confirmModal) {
      this.confirmModal.openModal();
    }
  }

  handleConfirmation(event: { email: string; phone: string }): void {
    // Handle the confirmation logic here, such as making an API call to finalize the booking
    console.log('Booking confirmed for:', event.email, event.phone);
  }
}
