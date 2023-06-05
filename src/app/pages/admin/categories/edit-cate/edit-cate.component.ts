import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICate } from 'src/app/interfaces/cate';
import { CateService } from 'src/app/services/cate/cate.service';

@Component({
  selector: 'app-edit-cate',
  templateUrl: './edit-cate.component.html',
  styleUrls: ['./edit-cate.component.css']
})
export class EditCateComponent {
  cate!: ICate;
  cateForm = this.formBuilder.group({
    name: ['']
  })
  
  constructor(
    private cateService: CateService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    
    this.route.paramMap.subscribe(param => {
      const id = param.get('_id');
      this.cateService.getCate(id).subscribe(cate => {
        this.cate = cate;
        this.cateForm.patchValue({
          name: cate.name
        })
      })
    })
  }
  onHandleEdit() {
    if(this.cateForm.valid) {
      const cate: ICate = {
        _id: this.cate._id,
        name: this.cateForm.value.name || ""
      }
      this.cateService.updateCate(cate).subscribe(data => {
        console.log(data)
      })
    }
  }
}
