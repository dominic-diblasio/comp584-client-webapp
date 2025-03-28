import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIcon } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterLink,
    MatToolbarModule,
    MatIcon,
    MatButtonModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
