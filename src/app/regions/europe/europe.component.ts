import { Component, OnInit } from '@angular/core';
import { TourPackagesService } from '../../services/tour-packages.service';
import { TourPackage } from '../../model/tour-package';
import { TraveldataService } from '../../services/traveldata.service';
@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrl: './europe.component.css'
})
export class EuropeComponent implements OnInit {
  selectedRegion: string;
  selectedTravelers: number;
  selectedDate: string;
  showSearchDetails = false;

  tourPackages: TourPackage[] = [];
  adventureTypes = ['All','Hill Stations', 'Desert Safari', 'Water Sports', 'Historical', 'Wonders'];
  selectedAdventureType: string = 'All';
  costPerPersonRange: [number, number] = [1000, 3000];

  constructor(private tourPackagesService: TourPackagesService, private travelData: TraveldataService) {}

  ngOnInit() {
    this.fetchTourPackages();
    this.travelData.getSelectedSearchDetails().subscribe((details) => {
      this.selectedRegion = details.region;
      this.selectedTravelers = details.travelers;
      this.selectedDate = details.date;
      this.showSearchDetails = true;
      this.changename();
    });
  }
  changename(){
    if (this.selectedRegion == 'europe'){
      this.selectedRegion = "Europe";
    }
  }
  fetchTourPackages() {
    this.tourPackages = this.tourPackagesService.getTourPackages('4', this.selectedAdventureType, this.costPerPersonRange);
  }
  applyFilters() {
    this.fetchTourPackages();
  }

  clearFilters() {
    this.selectedAdventureType = 'All';
    this.costPerPersonRange = [1000, 3000];
    this.fetchTourPackages();
  }
 

}
