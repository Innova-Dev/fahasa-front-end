import { Component } from '@angular/core';
import { IProduct  } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: IProduct[] =[]
  product!: IProduct;

  constructor(private productService: ProductService) { 
    this.productService.getProducts().subscribe(data => {
      this.products = data
      console.log(data)
      console.log(this.products);
      
    }, error => {
      console.log(error)

    })
  }
 
  
}
