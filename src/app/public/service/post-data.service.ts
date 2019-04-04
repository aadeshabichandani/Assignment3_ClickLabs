import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { dataFormat } from 'src/data-format/dataFormat';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
//import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class PostDataService {


  private handleError(errorResponse:HttpErrorResponse)
  {
    if(errorResponse.error instanceof ErrorEvent){
      console.log("Client side Error " + errorResponse.error.message );
    }
    else
    {
      alert("Problem with server!");
      console.log("Server side Error ");
    }
    return Observable.throw(errorResponse.statusText);

  }
  postingData(formData:dataFormat)
  {
    return this.httpPost.post("http://localhost:3000/registeredUsers",formData,{
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    })
    .pipe(catchError(this.handleError))
  
  }

  constructor(private httpPost : HttpClient,private route:Router) { }
}
