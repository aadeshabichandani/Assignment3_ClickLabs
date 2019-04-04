import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GetDataService } from 'src/app/public/service/get-data.service';
import { dataFormat } from 'src/data-format/dataFormat';
import { PatchDataService } from '../services/patch-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  public email: string = localStorage.getItem("user");
  public fetchedUserData: dataFormat;
  private profileForm: FormGroup;
  public uniqueId: string = localStorage.getItem("id");
  public fullName:string;


  constructor(private fBuilder: FormBuilder,
    private patchService: PatchDataService,
    private getService: GetDataService) { }

  ngOnInit() {

    this.profileForm = this.fBuilder.group({
      first_name: [''],
      last_name: [''],
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', Validators.required],
      address: ['', Validators.required],
      medical_history: ['']
    });

    this.getService.gettingData(this.email).subscribe((fetchedData: dataFormat) => {
      this.fetchedUserData = fetchedData[0];
      this.profileForm.controls['full_name'].setValue(this.fetchedUserData.first_name + " " + this.fetchedUserData.last_name);
      this.profileForm.controls['email'].setValue(this.fetchedUserData.email);
      this.profileForm.controls['phone_number'].setValue(this.fetchedUserData.phone_number);
      this.profileForm.controls['address'].setValue(this.fetchedUserData.address);
      this.profileForm.controls['medical_history'].setValue(this.fetchedUserData.medical_history);
      if (this.profileForm.controls['medical_history'].value == "") {
        this.profileForm.controls['medical_history'].setValue("NA");
      }
    });

  }

  updateUserData() {
    
    if (this.profileForm.valid) {
      if (window.confirm("Are you sure you want to update your details?")) {
        this.fullName = this.profileForm.get("full_name").value.split(" ");
          console.log(this.fullName.length)
          if(this.fullName.length<2 ){
            alert("Please enter last name");
          }
          else{ 
          this.profileForm.get("first_name").setValue(this.fullName[0]);
          this.profileForm.controls['last_name'].setValue(this.fullName[1]);
          this.patchService.patchingUserData(this.uniqueId, this.profileForm.value).subscribe(() => {
            alert("Details updated successfully!");
            localStorage.setItem("firstName",this.fullName[0]);
            localStorage.setItem("lastName",this.fullName[1]);

           location.reload();
            
          },
            () => {
              alert("Cannot Update your details currently!(ERROR)");
            })
        }
        
      }
    }
    else {
      alert("Please fill your details correctly!");
    }
  }
}
