import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private httpGet: HttpClient) { }

  gettingData(email: any) {
    //fetching data by passing the email id parameter in the URL.
    return this.httpGet.get("http://localhost:3000/registeredUsers?email=" + email);
  }
  gettingFaqData() {

    //fetching data for FAQ page.
    return this.httpGet.get("http://localhost:3000/faq");
  }
  gettingUpcomingBookingsData() {
    
    //fetching data for Upcoming Booking page.
    return this.httpGet.get("http://localhost:3000/upcomingBookings");
  }
  gettingPastBookingsData() {
    
    //fetching data for Past Booking page.
    return this.httpGet.get("http://localhost:3000/pastBookings");
  }
}
