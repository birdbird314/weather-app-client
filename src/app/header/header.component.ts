import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { RefreshHeaderService } from '../_services/refresh.header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private refreshHeader: RefreshHeaderService
  ) { }

  ngOnInit() {
    this.getIsLoggedIn();
    this.refreshHeader.refreshEmitter.subscribe(_ => this.getIsLoggedIn());
  }

  getIsLoggedIn() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout().subscribe(
      data => {
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
      },
      error => {

      }
    );
  }
}
