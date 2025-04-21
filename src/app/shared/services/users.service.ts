import { Injectable } from '@angular/core'
import { Iuser } from '../model/users'
import { from, Observable, of } from 'rxjs'
import { Router } from '@angular/router'
import { SnackbarService } from './snackbar.service'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArr: Array<Iuser> = [
    {
      userName: 'Jhon Doe',
      userId: '123',
      userRole: 'Candidate'
    },
    {
      userName: 'Jen Doe',
      userId: '124',
      userRole: 'Candidate'
    },
    {
      userName: 'May Doe',
      userId: '125',
      userRole: 'Admin'
    }
  ]
  constructor (
    private _router: Router,
    private _snackBArService : SnackbarService
  ) {}
  fetchAllUsers (): Observable<any> {
    // API call to fetch all Users DATA
    return of(this.usersArr)
  }

  getUser (id: string): Observable<Iuser> {
    // API call to get User Details
    let user = this.usersArr.find(user => user.userId === id)!
    return of(user)
  }

  addUser (userObj: Iuser): void {
    // API call to add new User in DB
    this.usersArr.push(userObj)
    // return of(userObj)
    this._router.navigate(['users']);
    this._snackBArService.openSnackBar(`The new User ${userObj.userName} added successfully !!!`)
  }

  updateUser (updatedUser: Iuser) {
    let getIndex = this.usersArr.findIndex(
      user => user.userId === updatedUser.userId
    )
    this.usersArr[getIndex] = updatedUser
    this._router.navigate(['users']);
    this._snackBArService.openSnackBar(`The  User ${updatedUser.userName} updated successfully !!!`)

  }

  removeUser (id: string) {
    let getIndex = this.usersArr.findIndex(user => user.userId === id)
    let removeUser = this.usersArr[getIndex]
    this.usersArr.splice(getIndex, 1)
    this._router.navigate(['users']);
    this._snackBArService.openSnackBar(`The  User ${removeUser.userName} removed successfully !!!`)
  }
}

// error?.
