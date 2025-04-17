import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _router : Router
  ) { }

  ngOnInit(): void {
  }


  onUserLoad(){
    // Get id from params and make a API call 

    // if success then navigate to Users Component 

    this._router.navigate(['/users']) // Absolute Routing
  }

}
