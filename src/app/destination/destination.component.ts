import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourPackagesService } from '../services/tour-packages.service';


@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent implements OnInit{

  regionId: number;
  destination: any

  constructor(private route: ActivatedRoute, private service: TourPackagesService) {}  
  
  ngOnInit(): void {
    
    }

}
