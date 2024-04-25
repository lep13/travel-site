import { Component, OnInit } from '@angular/core';
import { TourPackagesService } from '../../services/tour-packages.service';
import { TourPackage } from '../../model/tour-package';
import { TraveldataService } from '../../services/traveldata.service';
@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css'] // This should be styleUrls, not styleUrl
})
export class AsiaComponent implements OnInit {
  selectedRegion: string;
  selectedTravelers: number;
  selectedDate: string;
  showSearchDetails = false;

  tourPackages: TourPackage[] = [];
  adventureTypes = ['All', 'Hill Stations', 'Desert Safari', 'Water Sports', 'Historical', 'Wonders'];
  selectedAdventureType: string = 'All'; // Initialize with a default value
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
    if (this.selectedRegion == 'asia'){
      this.selectedRegion = "Asia";
    }
  }
  fetchTourPackages() {
    this.tourPackages = this.tourPackagesService.getTourPackages('1', this.selectedAdventureType, this.costPerPersonRange);
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
  
