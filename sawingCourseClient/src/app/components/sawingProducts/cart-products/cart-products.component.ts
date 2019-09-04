import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CartProduct } from '../../../classes/cart-product';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})
export class CartProductsComponent implements OnInit {
  @Input() products:CartProduct[];
  @Input() subTotal:number;
  //subTotal:number;

  updateSubTotal(){
    this.subTotal = 0;
    this.products.forEach(product => {
      this.subTotal += parseFloat(product.price)*product.amount;
    });
    console.log(this.subTotal);
  }

  decreaseAmount(product){
    if(product.amount > 1){
      product.amount--;
    }
    this.updateSubTotal();
  }

  increaseAmount(product){
    product.amount++;
    this.updateSubTotal();
  }

  removeProduct(product){
    console.log('in removeProduct');
    this.cartSrv.removeProduct(product.id);
    this.products = this.cartSrv.getProducts();
  }

  prodPrice(product){
    return parseFloat(product.price) * product.amount;
  }

  constructor(private cartSrv:CartService) { }

  ngOnInit() {
    this.updateSubTotal();
    console.log(this.subTotal);
  }

}
