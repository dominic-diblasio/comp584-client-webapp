import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from './weather-forecast';
import { environment } from '../environments/environment.development';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [
    NavBarComponent,
    RouterOutlet
  ]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }

  title = 'domangular.client';
}