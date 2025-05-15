import { Component } from '@angular/core';
import { Tournament } from '../tournament';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-all-profiles',
  imports: [],
  templateUrl: './all-profiles.component.html',
  styleUrl: './all-profiles.component.css'
})
export class AllProfilesComponent {
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
