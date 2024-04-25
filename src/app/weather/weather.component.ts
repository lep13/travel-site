import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  selectedCountry: string = '';
  weatherDetails: any = null; 
  selectedRegion: string;
  regions = ['Asia', 'Europe', 'Middle East', 'Americas'];
  isCountryInputEnabled: boolean = false;
  countries: string[] = [];
  invalidCountry: boolean = false;

  constructor(private weatherService: WeatherService) {}

  onRegionChange(): void {
    this.invalidCountry = false; // Reset invalid country flag
    this.selectedCountry = ''; // Reset selected country
    
    type RegionCountriesType = {
      'Asia': string[];
      'Europe': string[];
      'Middle East': string[];
      'Americas': string[];
    };
  
    let regionCountries: RegionCountriesType = {
      'Asia': ["China", "India", "Japan"],
      'Europe': ["France", "Italy", "Greece", "Switzerland"],
      'Middle East': ["United Arab Emirates", "Egypt", "Turkey", "Saudi Arabia"],
      'Americas': ["USA", "Brazil"]
    };
  
    this.countries = regionCountries[this.selectedRegion as keyof RegionCountriesType] || [];
    this.isCountryInputEnabled = this.countries.length > 0;
  }  
  

  enableCountryInput(): void {
    this.isCountryInputEnabled = true;
  }

  fetchWeather(): void {
    console.log(this.selectedCountry);
    if (!this.selectedCountry) {
      alert('Please enter a country name.');
      return;
    }
    if (!this.countries.includes(this.selectedCountry)) {
      alert('Invalid: Country not present in the selected region.');
      this.invalidCountry = true;
      return;
    }
    this.weatherService.getWeather(this.selectedCountry).subscribe(
      (data: any) => {
        this.weatherDetails = data;
      },
      (error: any) => {
        console.error('Failed to fetch weather data:', error);
      }
    );
  }
}
