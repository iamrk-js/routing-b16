import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsArr !: Array<Iproduct>
  constructor(
    private _productService : ProductsService
  ) { }

  ngOnInit(): void {
    this.productsArr = this._productService.fetchAllProducts()
  }

}
