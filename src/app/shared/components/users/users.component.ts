import { Component, OnDestroy, OnInit } from '@angular/core';
import { Iuser } from '../../model/users';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  usersArr: Array<Iuser> = [];
  usersSubscription !: Subscription
  constructor(
    private _userService: UsersService
  ) { }

  ngOnInit(): void {
    this.usersSubscription = this._userService.fetchAllUsers()
      .subscribe(res => {
        console.log(res);
        this.usersArr = res
      })
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe()
  }

}
