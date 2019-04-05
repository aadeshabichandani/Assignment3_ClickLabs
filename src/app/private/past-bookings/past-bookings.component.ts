import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/public/service/get-data.service';
import { bookingsDataFormat } from 'src/data-format/bookingsDataFormat';

@Component({
  selector: 'app-past-bookings',
  templateUrl: './past-bookings.component.html',
  styleUrls: ['./past-bookings.component.css']
})
export class PastBookingsComponent implements OnInit {

  constructor(private getService: GetDataService) { }
  public pastData: any;
  ngOnInit() {

    // calling the getDataService to fetch the data for past Bookings.

    this.getService.gettingPastBookingsData().subscribe((pastData) => {
      this.pastData = pastData;
    })
  }


}
