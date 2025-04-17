import { Injectable } from '@angular/core';
import { Iuser } from '../model/users';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArr: Array<Iuser> = [
    {
      userName: "Jhon Doe",
      userId: "123",
      userRole: "Candidate"
    },
    {
      userName: "Jen Doe",
      userId: "124",
      userRole: "Candidate"
    },
    {
      userName: "May Doe",
      userId: "125",
      userRole: "Admin"
    }
  ]
  constructor() { }


  fetchAllUsers(): Observable<any> {
    // API call to fetch all Users DATA
    return of(this.usersArr)
  }

  getUser(id:string): Observable<Iuser>{
    // API call to get User Details
    let user = this.usersArr.find(user => user.userId === id)!;
    return of(user)
  }
}


// error?.