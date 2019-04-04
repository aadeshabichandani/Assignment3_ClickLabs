import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public header:string = "";
  public firstName:string = localStorage.getItem("firstName");
  public lastName:string = localStorage.getItem("lastName");


  constructor(private route:Router) { 
    route.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() )}

  ngOnInit() {
  }
  handleRouteChange = () => {
    if (this.route.url.includes('authenticatedUser')) {
     this.header = "PROFILE";
    }
     if (this.route.url.includes('bookings')) {
      this.header = "MY BOOKINGS";
     }
     if (this.route.url.includes('faq')) {
      this.header = "FAQs";
     }
  };

  logout()
  {
    localStorage.clear();
    this.route.navigate([""]);
  }
}
