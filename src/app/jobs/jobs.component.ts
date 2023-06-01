
import { Component } from '@angular/core';

import { JobsdetailsService } from '../jobsdetails.service';

@Component({ templateUrl: 'jobs.component.html' })
export class JobsComponent {

    constructor(private jobsint:JobsdetailsService) { }
    jobsList:any
    istrue = false
      ngOnInit(): void {
    this.jobsint.getmethod().subscribe(data=>{
      this.jobsList=data
    })
    
    
      }
    
      postcontact(data:any){
        this.jobsint.postmethod(data).subscribe(result=>{
          this.istrue=true
          console.log(result)
        })
    
    
        
      }
    
 
}