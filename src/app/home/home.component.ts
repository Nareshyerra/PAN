import { Component } from '@angular/core';
import { JobsdetailsService } from '../jobsdetails.service';
// import { User } from '@app/_models';
// import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    // user: User;

    // constructor(private accountService: AccountService) {
    //     this.user = this.accountService.userValue;
    // }

    constructor(private jobsint:JobsdetailsService) { }
    jobsList:any
    istrue = false
      ngOnInit(): void {
    this.jobsint.getmethod().subscribe(data=>{
      this.jobsList=data
    })
    
    
      }





}