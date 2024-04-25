import { Component, OnInit } from '@angular/core';
import { TraveldataService } from '../services/traveldata.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
interface Traveler {
  name: string;
  age: number;
  mobileNumber: string;
  gender: string;
}

@Component({
  selector: 'app-travelers-info',
  templateUrl: './travelers-info.component.html',
  styleUrl: './travelers-info.component.css'
})

export class TravelersInfoComponent implements OnInit{
  travelerForm: FormGroup;
  travelers: Traveler[] = [];
  editIndex: number = -1;
  selectedTravelers: number = 1;
  private subscription: Subscription | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private traveldataService: TraveldataService,
    private route: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.initForm();
    // this.loadTravelers();
    this.subscription = this.traveldataService.getSelectedSearchDetails().subscribe(details => {
      this.selectedTravelers = details.travelers;
    });
    
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  initForm() {
    this.travelerForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      gender: ['', Validators.required]
    });
  }  
  
  // return /^\d{10}$/.test(phone);

  // loadTravelers() {
  //   const savedTravelers = localStorage.getItem('travelers');
  //   if (savedTravelers) {
  //     this.travelers = JSON.parse(savedTravelers);
  //   }
  // }

  saveTraveler() {
    if (this.travelerForm.valid) {
      if (this.travelers.length < this.selectedTravelers) {
        const formValues = this.travelerForm.value;
        if (this.editIndex === -1) {
          this.travelers.push(formValues);
        } else {
          this.travelers[this.editIndex] = formValues;
          this.editIndex = -1;
        }
        localStorage.setItem('travelers', JSON.stringify(this.travelers));
        this.travelerForm.reset();
      } else {
        // Show an error message or take appropriate action
        alert('You have reached the maximum number of travelers allowed.');
      }
    }
  }

  editTraveler(index: number) {
    this.editIndex = index;
    const traveler = this.travelers[index];
    this.travelerForm.patchValue(traveler);
  }

  deleteTraveler(index: number) {
    this.travelers.splice(index, 1);
    localStorage.setItem('travelers', JSON.stringify(this.travelers));
  }

  gettravelerCount() {
    return this.traveldataService.selectedTravelers;

  }
  continueWithBooking() {
    this.location.back();
  }
}

