import { Component, Input, OnInit } from '@angular/core';
import { Iproducts, productstatus } from 'src/app/models/products.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
@Input() getProduct !: Iproducts
allproductstatus  = productstatus
  constructor() { }

  ngOnInit(): void {
  }
  onProductadd(val : productstatus){
    // this.getProduct.pstatus = val;
  }

}
