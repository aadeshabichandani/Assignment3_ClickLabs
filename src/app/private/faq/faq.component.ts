import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/public/service/get-data.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  public faq:any=[];
  constructor(private getData:GetDataService) { }

  ngOnInit() {
    this.getData.gettingFaqData().subscribe((result)=>{this.faq=result})
  }
  
  

}
