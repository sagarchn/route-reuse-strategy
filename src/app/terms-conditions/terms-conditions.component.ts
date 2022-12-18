import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.css']
})
export class TermsConditionsComponent implements OnInit {

  constructor(private router: Router) {
    console.log('Terms and Conditions constructor!');
  }


  ngOnInit(): void {
  }

  goBack() {
    localStorage.setItem('reuse-op', 'retrieve');
    this.router.navigate(['add-details']);
  }

}
