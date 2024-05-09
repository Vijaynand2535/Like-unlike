import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iproducts, productstatus } from 'src/app/models/products.interface';
import { ProductsService } from 'src/app/services/products.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm !: FormGroup;
  // private _uuid = inject(UuidService)
  private _productService = inject(ProductsService)
  constructor(
    private _uuid : UuidService
  ) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      pname : new FormControl(null, [Validators.required]),
      pdetails : new FormControl(null, [Validators.required]),
    })
  }
  onProductadd(){
    if(this.productForm.valid){
      let obj : Iproducts = {
        ...this.productForm.value,
      id : this._uuid.Uuid(),
      pstatus : productstatus.Inprogress
      };
      console.log(obj);
      this._productService.addNewProduct(obj)
      this.productForm.reset();
      
    }
  }

}
