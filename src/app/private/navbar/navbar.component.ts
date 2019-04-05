import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GetDataService } from 'src/app/public/service/get-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // defining some local variables.
  public header:string = "";
  public firstName:string = localStorage.getItem("firstName");
  public lastName:string = localStorage.getItem("lastName");


  constructor(private route:Router, private getData:GetDataService) { 
    
    // subscribing to router events in order to get refreshed URL each time the 
    // NavigationEnd event occurs.

    route.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() )}
    public totalBookings:any;
  ngOnInit() {
  }
  // our function to check the URL and display the dynamic header accordingly.

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

  // logout function to clear localStorage and navigate back to public routings(login page).
  logout()
  {
    localStorage.clear();
    this.route.navigate(["/login"]);
  }

  navigateToProfile()
  {
    // funtion to navigate the user to his/her respective profile.
    this.route.navigate(["/authenticatedUser"]);
  }

  navigateToBookings()
  {
    // navigating the user to his/her respective profile.
    this.route.navigate(["/authenticatedUser/bookings"]);

    // calling the getData service which helps to fetch the length of onject present in
    // both the booking arrays stored on our server,and storing them in local variable.

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
    // function helps to navigate the user to 'faq' page.
    this.route.navigate(["/authenticatedUser/faq"]);
  }
}
