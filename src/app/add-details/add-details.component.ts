import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  details: Details;
  submittedDetails: Details;

  constructor(private router: Router) { 
    console.log('Add details constructor!');
  }

  ngOnInit(): void {
    this.details = new Details();
  }

  goToTermsNcond() {
    localStorage.setItem('reuse-op', 'store');
    this.router.navigate(['term-n-conditions']);
  }

  submit() {
    this.submittedDetails = new Details();
    this.submittedDetails.address = this.details.address;
    this.submittedDetails.userName = this.details.userName;
    this.details = new Details();
  }

}

export class Details {
  userName: string;
  address: string;
}
