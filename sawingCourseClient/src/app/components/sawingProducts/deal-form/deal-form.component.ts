import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from '../../../classes/order';

@Component({
  selector: 'app-deal-form',
  templateUrl: './deal-form.component.html',
  styleUrls: ['./deal-form.component.css']
})
export class DealFormComponent implements OnInit {

  @Input() subTotal;
  @Output() dealClosed = new EventEmitter();

  order:Order = new Order();

  submitForm(valid){
    if(valid){
      this.order.subTotal = this.subTotal;
      // console.log('in submitForm:');
      // console.log(this.order);
      this.dealClosed.emit(this.order);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
