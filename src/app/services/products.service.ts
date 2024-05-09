import { Injectable } from '@angular/core';
import { Iproducts, productstatus } from '../models/products.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArr : Array<Iproducts> = [
    {
      pname : "samsungA17",
      pdetails : "mobile ajfgtrdd",
      pstatus : productstatus.Inprogress,
      id : "aewrty1234"
    },
    {
      pname : "iphone",
      pdetails : "mobile ajfgtrdd",
      pstatus : productstatus.Dispatched,
      id : "akhtd123"
    }
  ]
  constructor(
    private _snackBar : SnackbarService
  ) { }

  fetchAllproducts():Array<Iproducts>{ 
    // API call to fetch products
    return this.productsArr
  }
  addNewProduct(prod : Iproducts){
    // API call to add new product in DB
    this.productsArr.unshift(prod);
    this._snackBar.snackBar( `New product ${prod.pname} is added !!`)
  }
}
