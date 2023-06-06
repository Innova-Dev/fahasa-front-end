import { Component } from '@angular/core';
import { IProduct,IProductImage } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: IProduct = {} as IProduct;
  constructor(private productService: ProductService, private cartService: CartService,
    private route: ActivatedRoute){
      this.route.paramMap.subscribe(params=>{
        const id = params.get(`_id`)
        this.productService.getProduct(id).subscribe(data =>{
          this.product = data.product
          console.log(this.product);
        })
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
    addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
}
