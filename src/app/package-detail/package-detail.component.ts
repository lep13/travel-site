import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourPackagesService } from '../services/tour-packages.service';
import { TourPackage } from '../model/tour-package';
import { ConfirmBookingModalComponent } from '../confirm-booking-modal/confirm-booking-modal.component';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css']
})
export class PackageDetailComponent implements OnInit {
  package: TourPackage | undefined;
  @ViewChild(ConfirmBookingModalComponent) confirmModal: ConfirmBookingModalComponent;

  constructor(
    private route: ActivatedRoute,
    private tourPackagesService: TourPackagesService
  ) {}

  ngOnInit() {
    const packageId = this.route.snapshot.paramMap.get('id');
    if (packageId) {
 
      const regions = ['1', '2', '3', '4'];
      for (const region of regions) {
        const tourPackage = this.tourPackagesService.getTourPackages(region).find(p => p.packageId === packageId);
        if (tourPackage) {
          this.package = tourPackage;
          break;
        }
      }
    }
  }
 
  openConfirmBookingModal() {
    if (this.confirmModal) {
      this.confirmModal.openModal();
    }
  }

  handleConfirmation({ email, phone }: { email: string; phone: string }) {
    // Handle the confirmation logic here, such as making an API call to finalize the booking
    console.log('Booking confirmed for:', email, phone);
  }
}