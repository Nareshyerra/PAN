import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JobsdetailsService {

  constructor(private http:HttpClient) { }

url="http://localhost:3000/jobs";


getmethod(){
  return this.http.get(this.url)
}

postmethod(data:any){

  return this.http.post(this.url,data)
}


}



