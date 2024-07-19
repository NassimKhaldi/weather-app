import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '31e8cbda196c1866ccf36cc66e8b835c';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/onecall';

  constructor(private http: HttpClient) {}

  getWeather(lat: number, lon: number): Observable<any> {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&exclude=minutely&appid=${this.apiKey}&units=metric&lang=fr`;
    return this.http.get(url);
  }
}
