import { Component, OnInit } from '@angular/core';
import { DALService } from '../../../services/dal.service';
import { Order } from '../../../classes/order';
import { OrderProduct } from '../../../classes/order-product';

@Component({
  selector: 'app-deals-table',
  templateUrl: './deals-table.component.html',
  styleUrls: ['./deals-table.component.css']
})
export class DealsTableComponent implements OnInit {


  deals:Order[] = [];
  loaded = false;
  chosenDealProducts: OrderProduct = null;

  chosen:number = 0;

  chosenDeal:Order;

  constructor( private dalSrv:DALService ) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.dalSrv.getFromDB('http://localhost:3000/deals').subscribe(data => {
      this.deals = data;
      this.loaded = true;
    });
  }

}