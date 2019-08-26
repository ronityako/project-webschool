import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})
export class CartProductsComponent implements OnInit {
  @Input() products:any[];

  decreaseAmount(product){
    if(product.amount > 1){
      product.amount--;
    }
  }

  increaseAmount(product){
    product.amount++;
  }
  constructor() { }

  ngOnInit() {
    console.log(this.products);
  }

}
