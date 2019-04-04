import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GetDataService } from 'src/app/public/service/get-data.service';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public header:string = "";
  public firstName:string = localStorage.getItem("firstName");
  public lastName:string = localStorage.getItem("lastName");


  constructor(private route:Router, private getData:GetDataService) { 
    route.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() )}
    public totalBookings:any;
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
    this.route.navigate(["/login"]);
  }
  navigateToProfile()
  {
    this.route.navigate(["/authenticatedUser"]);

  }
  navigateToBookings()
  {
    this.route.navigate(["/authenticatedUser/bookings"]);
    this.getData.gettingPastBookingsData().subscribe((data)=>
    { console.log(Object.keys(data).length);
      this.totalBookings=this.totalBookings+Object.keys(data).length;
    });
    this.getData.gettingUpcomingBookingsData().subscribe((data)=>
    { 
      this.totalBookings+=Object.keys(data).length;
      console.log(this.totalBookings);
    });
  }
  navigateToFaqs()
  {
    this.route.navigate(["/authenticatedUser/faq"]);
  }
}
