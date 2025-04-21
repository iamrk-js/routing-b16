import { Component, OnInit } from '@angular/core'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { ActivatedRoute } from '@angular/router'
import { Iproduct } from 'src/app/shared/model/products'
import { ProductsService } from 'src/app/shared/services/products.service'
import { GetConfirmComponent } from '../../get-confirm/get-confirm.component'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  prodId!: string
  product!: Iproduct
  constructor (
    private _routes: ActivatedRoute,
    private _productsService: ProductsService,
    private _matDialog: MatDialog
  ) {}

  ngOnInit (): void {
    // console.log(this._routes.snapshot.params['prodId']);
    this.prodId = this._routes.snapshot.params['prodId']
    console.log(this.prodId)
    // GET ID and make API call using service to get single Product

    this.product = this._productsService.getProduct(this.prodId)
    console.log(this.product)
  }

  onRemove () {
    // GET PRODUCT

    // GET_CONFORM
    // let getConfirm = confirm(`Are you sure you want to remove this Product?`)
    // // API CALL TO REMOVE PRODUCT
    // if(getConfirm){
    //   this._productsService.removeProduct(this.product)
    // }
    let matDialogConfig = new MatDialogConfig()
    matDialogConfig.width = '600px'
    matDialogConfig.disableClose = true
    matDialogConfig.data = `Are you sure, you want to remove this product ${this.product.pname}`
    let matDialogRef = this._matDialog.open(
      GetConfirmComponent,
      matDialogConfig
    )

    matDialogRef.afterClosed().subscribe(res => {
      if (res) {
        this._productsService.removeProduct(this.product)
      }
    })
  }
}
