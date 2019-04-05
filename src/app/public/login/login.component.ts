import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GetDataService } from '../service/get-data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // creating the reactive form.
  loginForm = this.loginBuilder.group({
    loginEmail: ['', [Validators.required, Validators.email]],
    loginPassword: ['', Validators.required],

  });
  constructor(private loginBuilder: FormBuilder, private getService: GetDataService, private route: Router) { }

  ngOnInit() {
  }
  loginFormSubmit() {

    //funtion to check and credentials and let user login
    if (this.loginForm.valid) {

      // fetching the data from the server by passing the email id as the parameter.
      this.getService.gettingData(this.loginForm.value.loginEmail).subscribe((fetchedData) => {
        if (Object.keys(fetchedData).length == 1) {

          // if the email id exist in the server, we will match the password of that respective account
          if (fetchedData[0].password == this.loginForm.value.loginPassword) {

            // if password is correct then we will route the user to it's respective profile.
            this.route.navigate(['/authenticatedUser']);
            // storing some data in localStorage which we might need somewhere ahead.
            localStorage.setItem("user", this.loginForm.value.loginEmail);
            localStorage.setItem("firstName", fetchedData[0].first_name);
            localStorage.setItem("lastName", fetchedData[0].last_name);
            localStorage.setItem("id", fetchedData[0].id);

          }
          else {
            //if password of the regstered user is'nt correct.
            alert("Incorrect Password");
          }
        }
        else if (Object.keys(fetchedData).length > 1) {

          // checking if we have more than one user with same email id
          alert("We have found same credentials for multiple users! We are working on that fix :)")
        }
        else {

          //if the email id entered is not found in our server.
          alert("Not registered! Please register yourself first!");
          this.route.navigate(['']);

        }
      });
    }
    else {
      // when the form is not valid.
      alert("Please fill the details correctly!");
    }
  }

}
