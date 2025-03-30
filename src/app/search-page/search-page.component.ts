import { Component } from '@angular/core';
import { Tournament } from '../tournament';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-search-page',
  imports: [],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
  public tournaments: Tournament[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTournaments();
  }

  getTournaments() {
    this.http.get<Tournament[]>(`${environment.baseUrl}api/Tournaments`).subscribe({
      next: result => this.tournaments = result,
      error: error => console.error(error)
    }
    );
  }
}
