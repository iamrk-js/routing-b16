import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Iuser } from 'src/app/shared/model/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  userId !: string;
  userObj !: Iuser;
  usersSub !: Subscription
  constructor(
    private _routes: ActivatedRoute,
    private _usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.userId = this._routes.snapshot.params['userId'];
    if (this.userId) {
      this.usersSub = this._usersService.getUser(this.userId)
        .subscribe(res => {
          this.userObj = res
        })
    }

    // this._routes.params
    //   .subscribe((params: Params) => {
    //     this.userId = params['userId'];
    //     this.usersSub = this._usersService.getUser(this.userId)
    //       .subscribe(res => {
    //         this.userObj = res
    //       })
    //   })
  }

  ngOnDestroy(): void {
    this.usersSub.unsubscribe()
  }

}
