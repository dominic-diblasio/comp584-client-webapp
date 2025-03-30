import { Component, OnInit } from '@angular/core'; // Use OnInit when creating fetched types
import { UserProfiles } from '../user-profiles';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profiles',
  imports: [],
  templateUrl: './profiles.component.html',
  styleUrl: './profiles.component.css'
})
export class ProfilesComponent implements OnInit {

  public user: UserProfiles | undefined;

  // Construct to also retrieve activatedRoute for fetching
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.http.get<UserProfiles>(`${environment.baseUrl}api/Users/${id}`).subscribe({
      next: result => this.user = result,
      error: error => console.error(error)
    }
    );
  }
}
