import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostDataService } from '../service/post-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private fBuilder: FormBuilder, private route: Router, private postService: PostDataService) { }

  ngOnInit() { }

  //building our reactie signUpForm with desirable validators.
  signUpForm = this.fBuilder.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone_number: ['', Validators.required],
    address: ['', Validators.required],
    medical_history: [''],
    password: ['', Validators.required],
    confirm_password: ['', Validators.required]
  });

  signUp() {
    // signup function to register a new user if all the details are valid.
    if (this.signUpForm.valid) {

      //calling our post service to post our data.
      this.postService.postingData(this.signUpForm.value).subscribe(() => {
        alert("Successfully Registered! Please Login to continue!");

        //on successfull registration, navigating the user to login page.
        this.route.navigate(['/login'])
      });
    }
    else {
      //if form is invalid
      alert("Please fill the details correctly!")
    }
  }
}



