import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(country: string): Observable<any> {
    const url = `${this.apiUrl}?q=${country}&appid=87d46c3cce2a57eb5fcf4c1cdcd1ca21`;
    return this.http.get(url);
  }
}
