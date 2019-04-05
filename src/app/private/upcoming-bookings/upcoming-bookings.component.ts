import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/public/service/get-data.service';

@Component({
  selector: 'app-upcoming-bookings',
  templateUrl: './upcoming-bookings.component.html',
  styleUrls: ['./upcoming-bookings.component.css']
})
export class UpcomingBookingsComponent implements OnInit {

  constructor(private getService:GetDataService) { }
  
  // declaring some variables
  public upcomingData:any;
  
  ngOnInit() {
    this.getService.gettingUpcomingBookingsData().subscribe((upcoming)=>
    {
      // fetching the upcoming bookings data from the server.
      this.upcomingData=upcoming;
    });
  }
  
  

}
