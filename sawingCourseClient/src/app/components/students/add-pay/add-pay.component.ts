import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-pay',
  templateUrl: './add-pay.component.html',
  styleUrls: ['./add-pay.component.css']
})
export class AddPayComponent implements OnInit {

  @Output() newPay = new EventEmitter();
  payment:any = {
    date: '',
    amount: 0,
    way: ''
  }

  newPayment(){
    this.newPay.emit(this.payment);
  }
  closeWin(){
    this.newPay.emit(null);
  }
  constructor() { }

  ngOnInit() {
  }

}
