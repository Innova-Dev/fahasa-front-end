import { CateService } from 'src/app/services/cate/cate.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { ICate } from 'src/app/interfaces/cate';

@Component({
  selector: 'app-cate',
  templateUrl: './cate.component.html',
  styleUrls: ['./cate.component.css']
})
export class CateComponent {
  constructor(private formBuilder: FormBuilder,
    private cateService: CateService) {

  }
  cateForm = this.formBuilder.group({
    name: [''],
    // image: ['']
  })
  onHandleSubmit() {
    if (this.cateForm.valid) {
      const cate: ICate = {
        name: this.cateForm.value.name || "",
        // image: this.cateForm.value.image || "",
      }
      this.cateService.addCate(cate).subscribe(data => {
        console.log(data)
      })
    }
  }
}
