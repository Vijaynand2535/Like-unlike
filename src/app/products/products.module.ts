import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashBoardComponent } from './product-dash-board/product-dash-board.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductDashBoardComponent,
    ProductFormComponent,
    ProductCardComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports : [
    ProductDashBoardComponent
  ]
})
export class ProductsModule { }
