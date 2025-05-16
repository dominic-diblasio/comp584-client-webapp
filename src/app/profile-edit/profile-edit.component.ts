import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { environment } from '../../environments/environment';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserProfiles } from '../user-profiles';

@Component({
  selector: 'app-profile-edit',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.css'
})
export class ProfileEditComponent implements OnInit {
  form!: FormGroup;
  public userProfile: UserProfiles | undefined;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.populateData();
    this.form = new FormGroup(
      {
        username: new FormControl(`${this.userProfile?.username}`, Validators.required),
        name: new FormControl(`${this.userProfile?.name}`, Validators.required),
        region: new FormControl(`${this.userProfile?.region}`, Validators.required)
      });
  }

  populateData() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    this.http.get<UserProfiles>(`${environment.baseUrl}api/Users/${id}`).subscribe({
      next: result => {
        this.userProfile = result;
        this.form.patchValue(result);
      },
      error: error => console.error(error)
    }
    );
  }

  onSubmit() {
    if (this.form.invalid || !this.userProfile) {
      return;
    }

    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (!id) {
      console.error("User ID not found in route.");
      return;
    }

    const updatedUser: UserProfiles = {
      ...this.userProfile, // retains all existing values
      username: this.form.value.username,
      name: this.form.value.name,
      region: this.form.value.region
      // other values like matchPlays, matchWins remain unchanged
    };

    this.http.put(`${environment.baseUrl}api/Users/${id}`, updatedUser).subscribe({
      next: response => {
        console.log("User updated successfully", response);
        // Afterwards, navigate back to profiles to signal a change
        this.router.navigate(["/profiles"]);
      },
      error: error => {
        console.error("Error updating user", error);
      }
    });

  }
}