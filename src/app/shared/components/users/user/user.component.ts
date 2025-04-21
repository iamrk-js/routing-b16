import { Component, OnDestroy, OnInit } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { ActivatedRoute, Params } from '@angular/router'
import { Subscription } from 'rxjs'
import { Iuser } from 'src/app/shared/model/users'
import { UsersService } from 'src/app/shared/services/users.service'
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  userId!: string
  userObj!: Iuser
  usersSub!: Subscription
  constructor (
    private _routes: ActivatedRoute,
    private _usersService: UsersService,
    private _matDialog: MatDialog
  ) {}

  ngOnInit (): void {
    this.userId = this._routes.snapshot.params['userId']
    if (this.userId) {
      this.usersSub = this._usersService.getUser(this.userId).subscribe(res => {
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

  onUserRemove () {
    // let getConfirm = confirm(`Are you sure, you want to remove this User?`);
    // if(getConfirm){
    //   this._usersService.removeUser(this.userId)
    // }
    let matDialogConfig = new MatDialogConfig();

    matDialogConfig.width = '600px';
    matDialogConfig.disableClose = true;
    matDialogConfig.data = `Are you sure, you want to remove this user ${this.userObj.userName}?`
    let matDialogRef = this._matDialog.open(GetConfirmComponent, matDialogConfig)
    matDialogRef.afterClosed().subscribe((res: boolean) => {
      if (res) {
        this._usersService.removeUser(this.userId)
      }
    })
  }

  ngOnDestroy (): void {
    this.usersSub.unsubscribe()
  }
}
