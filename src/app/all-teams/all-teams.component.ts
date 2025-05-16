import { Component } from '@angular/core';
import { TeamProfiles } from '../team-profiles';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-all-teams',
  imports: [
    RouterLink
  ],
  templateUrl: './all-teams.component.html',
  styleUrl: './all-teams.component.css'
})
export class AllTeamsComponent {
  public teams: TeamProfiles[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this.http.get<TeamProfiles[]>(`${environment.baseUrl}api/Teams`).subscribe({
      next: result => this.teams = result,
      error: error => console.error(error)
    }
    );
  }
}
