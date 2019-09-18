import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CartProduct } from '../../../classes/cart-product';
import { Order } from '../../../classes/order';
import { DALService } from '../../../services/dal.service';
import { OrderProduct } from '../../../classes/order-product';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css']
})
export class CartProductsComponent implements OnInit {
  @Input() products:CartProduct[];
  @Input() subTotal:number;
//  @Output() updateAmount = new EventEmitter();
  dealPopup:boolean = false;

  updateSubTotal(){
    this.subTotal = 0;
    this.products.forEach(product => {
      this.subTotal += this.prodPrice(product);
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
    this.updateSubTotal();
  }

  prodPrice(product){
    return parseFloat(product.price) * product.amount;
  }

  updateDeal(deal:Order){
    console.log('updateDeal beginning, deal:');
    console.log(deal);
    this.dealPopup = false;
    if(deal!=null){
//      this.updateAmount.emit();
      deal.products = [];
      for(let i = 0; i < this.products.length; i++){
        deal.products[i] = new OrderProduct();
        deal.products[i].id = this.products[i].id;
        deal.products[i].categoryId = this.products[i].categoryId;
        deal.products[i].name = this.products[i].name;
        deal.products[i].price = this.products[i].price;
        deal.products[i].amount = this.products[i].amount;
        if(this.products[i].color != undefined){
          deal.products[i].colorId = this.products[i].color.colorId;
        }
      }
      //deal.products = this.products;
      console.log('before post');
      console.log(deal);
      this.dalSrv.postNewToDB('http://localhost:3000/deals', deal).subscribe(data=>console.log('deal was updated in table'));
      console.log(deal);
      this.cartSrv.emptyCart();
      this.products = [];
      
    }
  }
  constructor( private cartSrv:CartService, private dalSrv:DALService ) { }

  ngOnInit() {
    this.updateSubTotal();
    console.log(this.subTotal);
  }

}
