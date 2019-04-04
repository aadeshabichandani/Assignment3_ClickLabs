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
  loginForm = this.loginBuilder.group({
    loginEmail: ['', Validators.required],
    loginPassword: ['', Validators.required],

  });
  constructor(private loginBuilder: FormBuilder, private getService: GetDataService, private route: Router) { }

  ngOnInit() {
  }
  loginFormSubmit() {
    if (this.loginForm.valid) {
      this.getService.gettingData(this.loginForm.value.loginEmail).subscribe((fetchedData) => {
        if (Object.keys(fetchedData).length == 1) {
          if (fetchedData[0].password == this.loginForm.value.loginPassword) {
            this.route.navigate(['/authenticatedUser']);
            localStorage.setItem("user", this.loginForm.value.loginEmail);
            localStorage.setItem("firstName", fetchedData[0].first_name);
            localStorage.setItem("lastName", fetchedData[0].last_name);


          }
          else {
            alert("Incorrect Password");
          }
        }
        else {
          alert("Not registered! Please register yourself first!");
          this.route.navigate(['']);

        }
      });
    }
    else
    {
      alert("Please fill the details correctly!");
    }
  }

}
