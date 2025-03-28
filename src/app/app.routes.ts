import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { TeamsComponent } from './teams/teams.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TournamentsPageComponent } from './tournaments-page/tournaments-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

export const routes: Routes = [
    { path: "browse", component: SearchPageComponent },
    { path: "profiles/:id", component: ProfilesComponent },
    { path: "teams/:id", component: TeamsComponent },
    { path: "tournaments/:id", component: TournamentsPageComponent },
    { path: "navbar", component: NavBarComponent },
    { path: "", component: TournamentsComponent, pathMatch: "full" }
];
