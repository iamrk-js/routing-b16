import { Injectable } from '@angular/core'
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor (private _snackBar: MatSnackBar) {}

  openSnackBar (msg: string) {
    let configObj: MatSnackBarConfig = {
      verticalPosition: 'top',
      horizontalPosition: 'left',
      duration: 3000
    }
    this._snackBar.open(msg, 'Close', configObj)
  }
}
