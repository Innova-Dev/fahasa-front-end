import { ICate } from 'src/app/interfaces/cate';
import { CateService } from './../../../../services/cate/cate.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-cate',
  templateUrl: './list-cate.component.html',
  styleUrls: ['./list-cate.component.css']
})
export class ListCateComponent {
  cates: ICate[] = [];
  constructor(private cateService: CateService) {
    this.cateService.getCates().subscribe(data => {
      this.cates = data
      console.log(data)
    })
  }
  removeCate(_id:any) {
    this.cateService.deleteCate(_id).subscribe(() => {
      this.cates = this.cates.filter(item => item._id !== _id)
    }, (error) => {
      console.log(error.message)
    })
  }
}
