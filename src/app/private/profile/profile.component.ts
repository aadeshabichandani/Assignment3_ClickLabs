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

  //fetching stored data from localStorage 
  public email: string = localStorage.getItem("user");
  public uniqueId: string = localStorage.getItem("id");

  // declaring some local variables
  public fetchedUserData: dataFormat;
  private profileForm: FormGroup;
  public fullName: string;


  constructor(private fBuilder: FormBuilder,
    private patchService: PatchDataService,
    private getService: GetDataService) { }

  ngOnInit() {

    //Creating profile form.

    this.profileForm = this.fBuilder.group({
      first_name: [''],
      last_name: [''],
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', Validators.required],
      address: ['', Validators.required],
      medical_history: ['']
    });

    // fetching data using our service, and passing email as the parameter to identify unique user.
    this.getService.gettingDataById(this.uniqueId).subscribe((fetchedData: dataFormat) => {

      // setting the form control values with the fetched data of a particular user .
      this.profileForm.controls['full_name'].setValue(fetchedData.first_name + " " + fetchedData.last_name);
      this.profileForm.controls['email'].setValue(fetchedData.email);
      this.profileForm.controls['phone_number'].setValue(fetchedData.phone_number);
      this.profileForm.controls['address'].setValue(fetchedData.address);
      this.profileForm.controls['medical_history'].setValue(fetchedData.medical_history);

      if (this.profileForm.controls['medical_history'].value == "") {
        this.profileForm.controls['medical_history'].setValue("NA");
      }
    });

  }

  updateUserData() {
    // function for updating the form
    //checking if the form is valid, and if it is then asking the user whether he is sure to update.
    if (this.profileForm.valid) {
      if (window.confirm("Are you sure you want to update your details?")) {
        this.fullName = this.profileForm.get("full_name").value.split(" ");
        console.log(this.fullName.length)
        if (this.fullName.length < 2) {
          alert("Please enter last name");
        }
        else {
          this.profileForm.get("first_name").setValue(this.fullName[0]);
          this.profileForm.controls['last_name'].setValue(this.fullName[1]);
          this.patchService.patchingUserData(this.uniqueId, this.profileForm.value).subscribe(() => {
            
            //  success callback
            localStorage.setItem("firstName", this.fullName[0]);
            localStorage.setItem("lastName", this.fullName[1]);
            localStorage.setItem("user",this.profileForm.value.email)
            alert("Details updated successfully!");

            //reloading our current webpage. 
            location.reload();
          },
            // error callback
            () => {
              alert("Cannot Update your details currently!(ERROR)");
            })
        }
      }
    }
    else {
      // if the form is not valid
      alert("Please fill your details correctly!");
    }
  }
}
