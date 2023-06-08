import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product: IProduct = {} as IProduct;
  productForm: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      list_price: [0, [Validators.required, Validators.min(0)]],
      original_price: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required]
    });

    this.route.paramMap.subscribe(param => {
      const _id = param.get('_id');
      console.log(_id);

      this.productService.getProduct(_id).subscribe(data => {
        this.product = data.product;
        console.log(data);
        this.productForm.patchValue({
          name: data.product.name,
          list_price: data.product.list_price,
          original_price: data.product.original_price,
          description: data.product.description
        });
      });
    });
  }

  isInvalidControl(controlName: string): any {
    const control: any= this.productForm.get(controlName);
    return control.invalid && control.touched;
  }

  onHandleEdit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        _id: this.product._id,
        name: this.productForm.value.name || '',
        list_price: this.productForm.value.list_price || 0,
        original_price: this.productForm.value.original_price || 0,
        description: this.productForm.value.description || ''
      };
      this.productService.updateProduct(product).subscribe(data => {
        console.log(data);
        this.router.navigate(['/admin/products']);
      });
    }
  }
}
