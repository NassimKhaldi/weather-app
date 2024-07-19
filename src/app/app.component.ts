import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Application Météo';
  weatherData: any;
  cityName: string = '';
  constructor(private weatherService: WeatherService) {}
  getWeather(city: string) {
    this.geocodeCity(city).then((coords) => {
      this.weatherService
        .getWeather(coords.lat, coords.lon)
        .subscribe((data) => {
          this.weatherData = data;
        });
    });
  }
  async geocodeCity(city: string) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=31e8cbda196c1866ccf36cc66e8b835c&lang=fr`
    );
    const data = await response.json();
    return { lat: data.coord.lat, lon: data.coord.lon };
  }
}
