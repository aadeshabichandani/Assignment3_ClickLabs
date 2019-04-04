import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/public/service/get-data.service';

@Component({
  selector: 'app-upcoming-bookings',
  templateUrl: './upcoming-bookings.component.html',
  styleUrls: ['./upcoming-bookings.component.css']
})
export class UpcomingBookingsComponent implements OnInit {

  constructor(private getService:GetDataService) { }
  upcomingData;
  ngOnInit() {
    this.getService.gettingUpcomingBookingsData().subscribe((upcoming)=>
    {
      this.upcomingData=upcoming;
    });
  }
  
  

}
