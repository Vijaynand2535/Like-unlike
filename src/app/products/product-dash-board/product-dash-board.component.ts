import { Component, OnInit, inject } from '@angular/core';
import { Iproducts } from 'src/app/models/products.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-dash-board',
  templateUrl: './product-dash-board.component.html',
  styleUrls: ['./product-dash-board.component.scss']
})
export class ProductDashBoardComponent implements OnInit {
  productsArr !: Array<Iproducts>
  private _productsService = inject(ProductsService)
  constructor() { }

  ngOnInit(): void {
    this.productsArr = this._productsService.fetchAllproducts()
  }

}
