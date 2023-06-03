import { Component } from '@angular/core';
import { IProduct, IProductImage  } from 'src/app/interfaces/products';
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
    }, error => {
      console.log(error)
    })
  }
  showProductImages(product: IProduct) {
    if (product.images) {
      product.images.forEach((image: IProductImage) => {
        console.log(image.base_url);
        // Do something with the product images
      });
    }
  }
  
}
