import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDestinationsPage: boolean = false;
  isNavLinkActive: boolean = false;
  isAdventuresPage: boolean = false;
  isContactPage: boolean = false;
  isAboutPage: boolean = false;
  isMyBookingsPage : boolean = false;
  

  constructor(private router: Router,private authService : AuthService) {
    this.authService = authService;
    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isNavLinkActive = event.url.includes('/destinations') || event.url.includes('/adventures');
        this.isDestinationsPage = event.url === '/destinations';
        this.isAdventuresPage = event.url === '/adventures';
        this.isContactPage = event.url === '/contact';
        this.isAboutPage = event.url === '/about-us';
        this.isMyBookingsPage = event.url === '/mybookings';
      }

     
    
    }); 
  }
  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  
  logout(){
    this.authService.logout();
  }
}
