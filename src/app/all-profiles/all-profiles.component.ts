import { Component } from '@angular/core';
import { UserProfiles } from '../user-profiles';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-all-profiles',
  imports: [
    RouterLink
  ],
  templateUrl: './all-profiles.component.html',
  styleUrl: './all-profiles.component.css'
})
export class AllProfilesComponent {
  public users: UserProfiles[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get<UserProfiles[]>(`${environment.baseUrl}api/Users`).subscribe({
      next: result => this.users = result,
      error: error => console.error(error)
    }
    );
  }
}
