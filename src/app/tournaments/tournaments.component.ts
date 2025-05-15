import { Component } from '@angular/core';
import { Tournament } from '../tournament';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tournaments',
  imports: [],
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.css'
})
export class TournamentsComponent {
  public tournament: Tournament | undefined;

  // Construct to also retrieve activatedRoute for fetching
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getTournamentDetails();
  }

  getTournamentDetails() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.http.get<Tournament>(`${environment.baseUrl}api/Tournaments/${id}`).subscribe({
      next: result => this.tournament = result,
      error: error => console.error(error)
    }
    );
  }
}
