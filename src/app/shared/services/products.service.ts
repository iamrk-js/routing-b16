import { Injectable } from '@angular/core';
import { Iproduct } from '../model/products';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArr: Array<Iproduct> = [
    {
      pname: 'Samsung M31',
      pid: "123",
      pstatus: "In-progress",
      canReturn: 1
    },
    {
      pname: 'Samsung TV',
      pid: "124",
      pstatus: "Dispatched",
      canReturn: 1
    },
    {
      pname: 'Iphone',
      pid: "125",
      pstatus: "Delivered",
      canReturn: 0
    }
  ]
  constructor(
    private _router: Router
  ) { }

  fetchAllProducts(): Array<Iproduct> {
    // API call to fetch the all products data
    return this.productsArr
  }

  getProduct(id: string): Iproduct {
    // API cal to get a product using productId = id(parameter)
    return this.productsArr.find(prod => prod.pid === id)!
  }

  addNewProduct(prod: Iproduct) {
    // API call to POST new Product in DB
    this.productsArr.push(prod);
    this._router.navigate(['products'])
  }

  updateProduct(updatedProd: Iproduct) {
    // PATCH API 
    let getIndex = this.productsArr.findIndex(prod => prod.pid === updatedProd.pid)

    this.productsArr[getIndex] = updatedProd;

    this._router.navigate(['products'])
  }

  removeProduct(product: Iproduct) {
    // API call to remove the product
    let getIndex = this.productsArr.findIndex(prod => prod.pid === product.pid);
    this.productsArr.splice(getIndex, 1);
    this._router.navigate(['/products'])
  }
}
