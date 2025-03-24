import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { CountriesComponent } from './countries/countries.component';
import { CitiesComponent } from './cities/cities.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CountryPopulationComponent } from './country-population/country-population.component';

export const routes: Routes = [
    { path: "weather", component: WeatherComponent },
    { path: "countries", component: CountriesComponent },
    { path: "countryPopulation/:id", component: CountryPopulationComponent },
    { path: "cities", component: CitiesComponent },
    { path: "navbar", component: NavBarComponent },
    { path: "", component: WeatherComponent, pathMatch: "full" }
];
