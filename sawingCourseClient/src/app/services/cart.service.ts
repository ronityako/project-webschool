import { Injectable } from '@angular/core';
import { CartProduct } from '../classes/cart-product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts:CartProduct[] = [];

  getProducts():CartProduct[]{
    return this.cartProducts;
  }

  addProduct(product){
    this.cartProducts.push(product);
  }

  updateProduct(product){
    let index = this.cartProducts.map(p => {return p.id}).indexOf(product.id);
    this.cartProducts[index] = product;
  }

  removeProduct(id){
    let index = this.cartProducts.map(p => {return p.id}).indexOf(id);
    this.cartProducts.splice(index, 1);
  }

  calculateSumToPay(){
    console.log('in service calculate function');
    let sum:number = 0;
    this.cartProducts.forEach(product => {
      console.log(product.price);
      console.log(parseFloat(product.price));
      console.log(product.amount);
      sum += parseFloat(product.price)*product.amount;
    });
    console.log(sum);
    return sum;
  }
  constructor() { }
}
