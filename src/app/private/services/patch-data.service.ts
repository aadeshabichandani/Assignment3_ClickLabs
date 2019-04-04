import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatchDataService {

  constructor(private patchHttp:HttpClient) { }

  patchingUserData(id,updateFormData)
  {
    return this.patchHttp.patch("http://localhost:3000/registeredUsers/"+id,updateFormData);
  }
}
