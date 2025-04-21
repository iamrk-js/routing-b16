import { NgModule } from '@angular/core'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

const matModArr = [
  MatSnackBarModule,
  MatDialogModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [...matModArr],
  exports: [...matModArr]
})
export class MaterialModule {}
