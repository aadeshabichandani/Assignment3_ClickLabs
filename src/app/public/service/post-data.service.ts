import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { dataFormat } from 'src/data-format/dataFormat';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  //service for posting the data

  constructor(private httpPost: HttpClient, private route: Router) { }

  postingData(formData: dataFormat) {
    //passing the form value for storing it in our server
    return this.httpPost.post("http://localhost:3000/registeredUsers", formData, {
      headers: new HttpHeaders({
        // attach the respecting header in order to make the posting of data hastle free through JSON-SERVER
        'Content-Type': 'application/json'
      })
    })
      //catch error, if any
      .pipe(catchError(this.handleError))

  }

  private handleError(errorResponse: HttpErrorResponse) {

    // error handling function
    if (errorResponse.error instanceof ErrorEvent) {

      //if error has occured on users side
      console.log("Client side Error " + errorResponse.error.message);
    }
    else {
      //if there's some issues with the server
      alert("Problem with server!");
      console.log("Server side Error ");
    }
    return Observable.throw(errorResponse.statusText);

  }


}
