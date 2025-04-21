import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Iuser } from 'src/app/shared/model/users'
import { UsersService } from 'src/app/shared/services/users.service'
import { UuidService } from 'src/app/shared/services/uuid.service'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  isInEditMode: boolean = false
  userId!: string // undefined
  userForm!: FormGroup // undefined
  constructor (
    private _routes: ActivatedRoute,
    private _uuidService: UuidService,
    private _usersService: UsersService
  ) {}

  ngOnInit (): void {
    this.userForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      userRole: new FormControl(null, [Validators.required])
    })

    this.userId = this._routes.snapshot.params['userId']
    if (this.userId) {
      this.isInEditMode = true
      // API call to get UserObject usig above UserId
      this._usersService.getUser(this.userId).subscribe(user => {
        console.log(user)
        this.userForm.patchValue(user)
      })
    }
  }

  onUserSubmit () {
    if (this.userForm.valid) {
      if (!this.isInEditMode) {
        let newUser: Iuser = this.userForm.value
        newUser.userId = this._uuidService.uuid()
        this.userForm.reset()
        this._usersService.addUser(newUser)
      }else{
        let updatedUser: Iuser = {...this.userForm.value, userId : this.userId};
        this._usersService.updateUser(updatedUser)
      }
    }
  }
}
