import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, AfterViewInit {
  prodId !: string;
  isInEditMode: boolean = false;
  editProdObj !: Iproduct;
  @ViewChild('productForm') productForm !: NgForm;
  constructor(
    private _routes: ActivatedRoute,
    private _productService: ProductsService,
    private _uuidService: UuidService,

  ) { }

  ngOnInit(): void {
    // console.log(this._routes);
    this.prodId = this._routes.snapshot.params['prodId'];
    console.log(this.prodId);
    console.log(this.productForm);
    if (this.prodId) {
      this.isInEditMode = true; // 

      setTimeout(() => {
        if (this.prodId) {
          this.editProdObj = this._productService.getProduct(this.prodId);
          this.productForm.form.patchValue(this.editProdObj)
        }
      },0)
    } else {
      this.isInEditMode = false
    }

  }

  ngAfterViewInit(): void {
    console.log(this.productForm);
    console.log(this.prodId);
    // if(this.prodId){
    //   this.editProdObj = this._productService.getProduct(this.prodId);
    //   this.productForm.form.patchValue(this.editProdObj)
    // }
  }

  // isinEditMode ? PATCH : POST

  onProductSubmit() {
    if (this.productForm.valid) {
      // if comp isIneditMode == false  Add == POST
      if (!this.isInEditMode) {
        // GET New Product Object >> API call using service 
        let newProd: Iproduct = { ...this.productForm.value, pid: this._uuidService.uuid() }
        newProd.canReturn = +newProd.canReturn
        console.log(newProd);
        this.productForm.reset();
        this._productService.addNewProduct(newProd)
      } else {
        // GET UPDATED OBJECT FROM FORM
        let UPDATED_OBJ = { ...this.productForm.value, pid: this.prodId };
        UPDATED_OBJ.canReturn = +UPDATED_OBJ.canReturn;
        console.log(UPDATED_OBJ);
        this._productService.updateProduct(UPDATED_OBJ)
        // API CALL TO UPDATE OBJECT >> Service
      }

      // else comp !isIneditMode Update == PATCH
    }
  }
}
