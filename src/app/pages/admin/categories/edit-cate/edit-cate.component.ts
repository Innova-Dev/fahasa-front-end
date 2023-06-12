import { CateService } from 'src/app/services/cate/cate.service';
import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { ICate } from 'src/app/interfaces/cate';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-cate',
  templateUrl: './edit-cate.component.html',
  styleUrls: ['./edit-cate.component.css']
})
export class EditCateComponent {
  cate!: any;
  cateForm = this.formBuilder.group({
    name: [''],
  })
  constructor(
    private cateService: CateService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.route.paramMap.subscribe(param => {
      const _id = param.get('_id');
      this.cateService.getCate(_id).subscribe(data => {
        this.cate = data
        console.log(this.cate)
        this.cateForm.patchValue({
          name: data.name
        })
      })
    })
  }
  onHandleEdit() {
    if(this.cateForm.value) {
      const product: ICate= {
        _id: this.cate.data._id,
        name: this.cateForm.value.name || ""
      }
      console.log(product)
      this.cateService.updateCate(product).subscribe(data => {
        console.log(data)
        alert('Cap nhat thanh cong')
      })
    }
  }
  }
