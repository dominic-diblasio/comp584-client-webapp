import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { TeamsComponent } from './teams/teams.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { AllProfilesComponent } from './all-profiles/all-profiles.component';
import { AllTeamsComponent } from './all-teams/all-teams.component';

export const routes: Routes = [
    { path: "browse", component: SearchPageComponent },
    { path: "tournaments/:id", component: TournamentsComponent },
    { path: "profiles", component: AllProfilesComponent },
    { path: "profiles/:id", component: ProfilesComponent },
    { path: "teams", component: AllTeamsComponent },
    { path: "teams/:id", component: TeamsComponent },
    { path: "navbar", component: NavBarComponent },
    { path: "", component: SearchPageComponent, pathMatch: "full" }
];
