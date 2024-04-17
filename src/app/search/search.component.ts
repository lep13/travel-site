import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { Region } from '../model/region';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'] 
})
export class SearchComponent implements OnInit {
  currentDate: string;
  searchForm: FormGroup;
  regions: Region[] = [
    { id: 'asia', name: 'Asia' },
    { id: 'americas', name: 'Americas' },
    { id: 'middle-east', name: 'Middle East' },
    { id: 'europe', name: 'Europe' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.searchForm = this.fb.group({
      region: ['', Validators.required],
      date: ['', Validators.required],
      travelers: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    this.currentDate = this.getCurrentDate();
    this.searchForm.get('date')?.setValue(this.currentDate);
  }

  getCurrentDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  decrementTravelerCount(): void {
    if (this.searchForm.get('travelers')?.value > 1) {
      this.searchForm.get('travelers')?.setValue(this.searchForm.get('travelers')?.value - 1);
    } else {
      alert("Minimum number of travelers should be 1");
    }
  }

  incrementTravelerCount(): void {
    this.searchForm.get('travelers')?.setValue(this.searchForm.get('travelers')?.value + 1);
  }
  
  search(): void {
    if (this.searchForm.valid) {
      this.navigateBasedOnRegion(this.searchForm.get('region')?.value);
    } else {
      this.showValidationErrors();
    }
  }

  navigateBasedOnRegion(region: string): void {
    // Your navigation logic based on the selected region
    this.router.navigate([`/destination/${region}`]);
  }

  showValidationErrors(): void {
    if (this.searchForm.get('region')?.errors) {
      alert('Region must be selected.');
    }
    if (this.searchForm.get('date')?.errors) {
      alert('Check-in date must be added.');
    }
    if (this.searchForm.get('travelers')?.hasError('min')) {
      alert('Minimum number of travelers should be 1.');
    }
  }
}
