import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DALService } from '../../../services/dal.service';
import { ConcatSource } from 'webpack-sources';
import { CartService } from '../../../services/cart.service';
import { CartProduct } from '../../../classes/cart-product';
import { Color } from '../../../classes/color';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})



export class ProductsComponent implements OnInit {
  
  products:any[] = [];
  showColorsList = {};
  showColor = {};
  color:Color[] = [];
  enableCartBtn:boolean;
  showCartProducts = false;
  productsToCart:CartProduct[] = [];
  cartSubTotal:number;
  //cartIndex:number = 0;
  
  updateColor(index){
    console.log(this.showColorsList[index]);
    this.showColorsList[index] = !this.showColorsList[index];
  }

  showSelectedColor(colorId, i){
    this.showColor[i] = true;
    let colorsIndex = colorId % 100 - 1;
    this.color[i] = this.products[i].colors[colorsIndex];
    this.showColorsList[i] = false;
  }

  addToCart(product, i){
    console.log(i);
    // console.log(this.cartIndex);
    // console.log(this.productsToCart[this.cartIndex]);
    console.log(product);
    let currentProduct:CartProduct = new CartProduct();
    currentProduct.id = product.id;
    currentProduct.categoryId = product.categoryId;
    currentProduct.name = product.name;
    currentProduct.picture = product.picture;
    currentProduct.color = this.color[i];
    currentProduct.amount = 1;
    currentProduct.price = product.price;
    this.cartSrv.addProduct(currentProduct);
    this.productsToCart = this.cartSrv.getProducts();
    //this.productsToCart.push(currentProduct);
   // this.cartIndex++;
   this.cartSubTotal = this.cartSrv.calculateSumToPay();
   console.log(this.cartSubTotal);
    this.showCartProducts = true;
  }

  // calculateSubTotal(){
  //   return this.cartSrv.calculateSumToPay();
  // }

  constructor( private ar:ActivatedRoute, private dalSrv:DALService, private cartSrv:CartService) { }

  ngOnInit() {
    this.ar.params.subscribe( params => { 
       this.dalSrv.getFromDB(`http://localhost:3000/products/${params.id}`).subscribe(data => {
         this.products = data;
         console.log(this.products);
       });
       
    })
  }

}
