import { Component } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:IProduct[]=[]

    constructor(private productService:ProductService){
      this.productService.getProducts().subscribe(data=>{
        this.products=data
        console.log(data)
      },error=>{
        console.log(error)
      })
    }

}
