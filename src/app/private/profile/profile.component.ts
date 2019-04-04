import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { PostDataService } from 'src/app/public/service/post-data.service';
import { GetDataService } from 'src/app/public/service/get-data.service';
import { dataFormat } from 'src/data-format/dataFormat';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  public email: string = localStorage.getItem("user");
  public fetchedUserData: dataFormat;
  private profileForm: FormGroup;


  constructor(private fBuilder: FormBuilder,
    private postService: PostDataService,
    private getService: GetDataService) { }

  ngOnInit() {

    this.profileForm = this.fBuilder.group({
      full_name: [''],
      email: [''],
      phone_number: [''],
      address: [''],
      medical_history: ['']
    });

    this.getService.gettingData(this.email).subscribe((fetchedData: dataFormat) => {
      this.fetchedUserData = fetchedData[0];
      console.log(this.fetchedUserData.first_name);
      this.profileForm.controls['full_name'].setValue(this.fetchedUserData.first_name + " " + this.fetchedUserData.last_name);
      this.profileForm.controls['email'].setValue(this.fetchedUserData.first_name);
      this.profileForm.controls['phone_number'].setValue(this.fetchedUserData.phone_number);
      this.profileForm.controls['address'].setValue(this.fetchedUserData.address);
      this.profileForm.controls['medical_history'].setValue(this.fetchedUserData.medical_history);
      if (this.profileForm.controls['medical_history'].value=="") {
        this.profileForm.controls['medical_history'].setValue("NA");
      }
    });
  }
}
