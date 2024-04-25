import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface SelectedSearchDetails {
  region: string;
  travelers: number;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class TraveldataService {
  private selectedSearchDetails = new BehaviorSubject<SelectedSearchDetails>({
    region: '',
    travelers: 1,
    date: ''
  });

  private isSearchPerformed = new BehaviorSubject<boolean>(false);

  getSelectedSearchDetails() {
    return this.selectedSearchDetails.asObservable();
  }

  updateSelectedSearchDetails(details: SelectedSearchDetails) {
    this.selectedSearchDetails.next(details);
    this.isSearchPerformed.next(true);

  }
  resetSearchDetails() {
    this.selectedSearchDetails.next({
      region: '',
      travelers: 1,
      date: ''
    });
    this.isSearchPerformed.next(false);
  }

  get selectedTravelers(): number {
    return this.selectedTravelers;
  }

  set selectedTravelers(value: number) {
    this.selectedTravelers;
  }
  constructor() { }
}
