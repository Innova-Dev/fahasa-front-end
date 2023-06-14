import { Component, OnInit } from '@angular/core';
import { PurchaseHistoryService } from 'src/app/services/purchase-history.service';
import { PurchaseHistory  } from 'src/app/interfaces/product';
@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
  purchaseHistory: PurchaseHistory[] = [];
  constructor(private purchaseHistoryService: PurchaseHistoryService) { }
  ngOnInit(): void {
    this.getPurchaseHistory();
  }

  getPurchaseHistory(): void {
    this.purchaseHistoryService.getPurchaseHistory()
      .subscribe((history:any) => {
        this.purchaseHistory =history.data;  // Sửa dòng này thành this.purchaseHistory = history.items;
        console.log(history)
      });
  }
  
} 


