import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private httpGet: HttpClient) { }

  gettingData(email: any) {
    return this.httpGet.get("http://localhost:3000/registeredUsers?email=" + email);
  }
  gettingFaqData() {
    return this.httpGet.get("http://localhost:3000/faq");
  }
  gettingUpcomingBookingsData() {
    return this.httpGet.get("http://localhost:3000/upcomingBookings");
  }
  gettingPastBookingsData() {
    return this.httpGet.get("http://localhost:3000/pastBookings");
  }
}
