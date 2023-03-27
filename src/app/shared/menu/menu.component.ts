import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/services/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  items: MenuItem[] = []

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    if (!this.authService.isAutenticated()) {
      this.router.navigate(['/login'])
    }

    this.items = [
      {
        label: 'Characters',
        routerLink: '/rm/characters'
      },
      {
        label: 'Episodes',
        routerLink: '/rm/episodes'
      },
      {
        label: 'Locations',
        routerLink: '/rm/locations'
      }
    ]

  }

  logout(): void {
    this.authService.logout()
  }

}
