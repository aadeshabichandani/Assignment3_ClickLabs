import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PostDataService } from '../service/post-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm = this.fBuilder.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', [Validators.required,Validators.email]],
    phone_number: ['', Validators.required],
    address: ['', Validators.required],
    medical_history: [''],
    password: ['', Validators.required],
    confirm_password: ['', Validators.required]
  });

  signUp() {
   
    if (this.signUpForm.valid) {
      this.postService.postingData(this.signUpForm.value).subscribe(()=>{
        alert("Successfully Registered! Please Login to continue!");
        this.route.navigate(['/login'])
      });
    }
    else {
      alert("Please fill the details correctly!")
    }
  }

  constructor(private fBuilder: FormBuilder, private route: Router,private postService : PostDataService) { }

  ngOnInit() {
  }

}



