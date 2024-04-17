import { Component, OnInit } from '@angular/core';
import { TourPackagesService } from '../../services/tour-packages.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})

export class TimelineComponent implements OnInit {
  imageUrl: any;
  constructor(
    private route: ActivatedRoute,
    private tourPackagesService: TourPackagesService
  ) {}
  ngOnInit(): void {
    const packageId = this.route.snapshot.paramMap.get('id');
    if (packageId) {
      this.imageUrl = this.tourPackagesService.getItinerary(packageId);
    } else {
    // handle the case where the package ID is not provided
    }
  }
}