import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  constructor (
    private formBuilder: FormBuilder,
    private productService: ProductService,  private router: Router
  ) {}

  productForm = this.formBuilder.group({
    name: [''],
    list_price: [0],
    original_price: [0],
    images: [[]], // Khởi tạo images với một mảng rỗng
    description: [''],
  });

  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || '',
        list_price: this.productForm.value.list_price || 0,
        original_price: this.productForm.value.original_price || 0,
        images: Array.isArray(this.productForm.value.images) ? this.productForm.value.images : [], // Chuyển đổi images thành mảng nếu không phải là mảng
        description: this.productForm.value.description || '',
      };

      this.productService.addProduct(product).subscribe(data => {
        console.log(data);
        console.log(this.productForm.value.images);
        alert("Thêm sản phẩm thành công!")
        this.router.navigate(['/admin/products']);
      });
    }
  }
}
