import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatchDataService {

  constructor(private patchHttp:HttpClient) { }

  patchingUserData(id,updateFormData)
  {
    //using patch to update partial values of the currect object.
    //two params are passed. One to uniquely identify the user and second the changes.
    return this.patchHttp.patch("http://localhost:3000/registeredUsers/"+id,updateFormData);
  }
}
