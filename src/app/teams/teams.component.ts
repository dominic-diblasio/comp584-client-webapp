import { Component, OnInit } from '@angular/core'; // Use OnInit when creating fetched types
import { TeamProfiles } from '../team-profiles';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-teams',
  imports: [],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  public team: TeamProfiles | undefined;

  // Construct to also retrieve activatedRoute for fetching
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getTeamProfile();
  }

  getTeamProfile() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.http.get<TeamProfiles>(`${environment.baseUrl}api/Teams/${id}`).subscribe({
      next: result => this.team = result,
      error: error => console.error(error)
    }
    );
  }
}
