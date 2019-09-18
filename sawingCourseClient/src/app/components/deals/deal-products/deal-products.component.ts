import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderProduct } from '../../../classes/order-product';

@Component({
  selector: 'app-deal-products',
  templateUrl: './deal-products.component.html',
  styleUrls: ['./deal-products.component.css']
})
export class DealProductsComponent implements OnInit {

  @Input() dealProducts:OrderProduct;
  @Output() productsDealClosed = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
