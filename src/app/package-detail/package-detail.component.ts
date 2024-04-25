import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourPackagesService } from '../services/tour-packages.service';
import { TourPackage } from '../model/tour-package';
import { ConfirmBookingModalComponent } from '../confirm-booking-modal/confirm-booking-modal.component';
import { TraveldataService } from '../services/traveldata.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../shared/auth.service';
import { FormGroup } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormBuilder,Validators } from '@angular/forms';



@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class PackageDetailComponent implements OnInit {
  currentDate: string;
  selectedTravelers: number = 1; // Default to 1 if not defined
  selectedDate: string;
  package: TourPackage | undefined;
  totalCost: number = 0;
  costPerPerson: number;
  buttonClicked : boolean = false;
  hasTravelersAdded: boolean = false;
  secondFormGroup: FormGroup;
  isLinear : boolean = false;
  cnfrm: string = "Add Travelers to proceed with Confirmation";
 
  @ViewChild(ConfirmBookingModalComponent) confirmModal: ConfirmBookingModalComponent;
 
  constructor(
    private route: ActivatedRoute,
    private tourPackagesService: TourPackagesService,
    private traveldataService: TraveldataService,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private authService : AuthService
  ) {
    this.authService = authService;
  }

  ngOnInit() {
    const packageId = this.route.snapshot.paramMap.get('id');
    if (packageId) {
      const regions = ['1', '2', '3', '4'];
      for (const region of regions) {
        const tourPackage = this.tourPackagesService.getTourPackages(region).find(p => p.packageId === packageId);
        if (tourPackage) {
          this.package = tourPackage;
          this.costPerPerson = tourPackage.costPerPerson;
 
          this.traveldataService.getSelectedSearchDetails().subscribe((details) => {
            this.selectedTravelers = details.travelers || 1; // Default to 1 if not defined
            this.currentDate = details.date || this.getCurrentDate();
            this.selectedDate = details.date;
            this.calculateTotal();
          });
          break;
        }
      }
    }
  }

  
  getCurrentDate_(): string {
       const today = new Date();
      return today.toISOString().split('T')[0];
   
  }

  getCurrentDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }
 
  calculateTotal() {
    if (this.package && this.selectedTravelers) {
      this.totalCost = this.costPerPerson * this.selectedTravelers;
    }
  }
 
  openConfirmBookingModal() {
    const bookingData = {
      packageName: this.package?.packageName,
      description: this.package?.description,
      countryName: this.package?.countryName,
      selectedTravelers: this.selectedTravelers,
      selectedDate: this.selectedDate,
      totalCost: this.totalCost,
      dateBooked: new Date(),
    };
 
    console.log("pkg", bookingData);
 

    this.afAuth.currentUser.then((user) => {
      if (user) {
        console.log("adding to db");
        const userBookingsRef = this.afs.collection(`bookings/${user.uid}/userBookings`);
        userBookingsRef.add(bookingData);
      }
    });

    if (this.confirmModal) {
      this.confirmModal.openModal();
    }
  }
 
  handleConfirmation({ email, phone }: { email: string; phone: string }) {
    console.log('Booking confirmed for:', email, phone);
  }
 
  updateSelectedDate(event: any) {
    this.selectedDate = event.target.value;
    this.traveldataService.updateSelectedSearchDetails({
      region: '',
      travelers: this.selectedTravelers,
      date: this.selectedDate
    });
  }
 
  updateSelectedTravelers(event: any) {
    const value = (event.target as HTMLInputElement).value;
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      this.selectedTravelers = parsedValue;
      this.calculateTotal(); // Recalculate total cost
      this.traveldataService.updateSelectedSearchDetails({
        region: '',
        travelers: this.selectedTravelers,
        date: this.selectedDate
      });
    }

  }
  onClick() {
    this.buttonClicked = true;
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  onTravelersAdded() {
    this.hasTravelersAdded = true;
  }
}
