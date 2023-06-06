import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product: IProduct = {} as IProduct;
  productForm = this.fromBuilder.group({
    name:[''],
    list_price:[0],
    original_price:[0],
    description:['']
  })
  constructor(private productService:ProductService, private fromBuilder:FormBuilder,private route:ActivatedRoute){
    this.route.paramMap.subscribe(param=>{
      const _id = param.get('_id')
      console.log(_id)

      this.productService.getProduct(_id).subscribe(data=>{
        this.product=data.product;
        console.log(data)
        this.productForm.patchValue({
          name:data.product.name,
          list_price:data.product.list_price,
          original_price:data.product.original_price,
          description:data.product.description
        })
      })
    })
  }

  onHandleEdit(){
    const product:IProduct={
      _id:this.product._id,
      name:this.productForm.value.name||"",
      list_price:this.productForm.value.list_price||0,
      original_price:this.productForm.value.original_price||0,
      description:this.productForm.value.name||""
    }
    this.productService.updateProduct(product).subscribe(data=>{
      console.log(data)
    })
  }
}
