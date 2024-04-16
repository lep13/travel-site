import { Component, OnInit } from '@angular/core';
import { TourPackagesService } from '../../services/tour-packages.service';
import { TourPackage } from '../../model/tour-package';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.css'] // This should be styleUrls, not styleUrl
})
export class AsiaComponent implements OnInit {
  tourPackages: TourPackage[] = [];
  adventureTypes = ['All', 'Hill Stations', 'Desert Safari', 'Water Sports', 'Historical', 'Wonders'];
  selectedAdventureType: string = 'All'; // Initialize with a default value
  costPerPersonRange: [number, number] = [1000, 3000];

  constructor(private tourPackagesService: TourPackagesService) {}

  ngOnInit() {
    this.fetchTourPackages();
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
  

