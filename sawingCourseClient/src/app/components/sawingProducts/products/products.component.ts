import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DALService } from '../../../services/dal.service';
import { ConcatSource } from 'webpack-sources';

class ProductsToCart{
  id: number;
  categoryId: number;
  name: String;
  picture: String;
  price: String;
  color:any;
  amount:number;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})



export class ProductsComponent implements OnInit {

  
  products:any[] = [];
  showColorsList = {};
  showColor = {};
  color:any[] = [];
  enableCartBtn:boolean;
  showCartProducts = false;
  productsToCart:ProductsToCart[] = [];
  cartIndex:number = 0;
  
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
    console.log(this.cartIndex);
    console.log(this.productsToCart[this.cartIndex]);
    console.log(product);
    let currentProduct:ProductsToCart = new ProductsToCart();
    currentProduct.id = product.id;
    currentProduct.categoryId = product.categoryId;
    currentProduct.name = product.name;
    currentProduct.picture = product.picture;
    currentProduct.color = this.color[i];
    currentProduct.amount = 1;
    currentProduct.price = product.price;
    this.productsToCart.push(currentProduct);
    this.cartIndex++;
    this.showCartProducts = true;
  }

  constructor( private ar:ActivatedRoute, private dalSrv:DALService) { }

  ngOnInit() {
    this.ar.params.subscribe( params => { 
       this.dalSrv.getFromDB(`http://localhost:3000/products/${params.id}`).subscribe(data => {
         this.products = data;
         console.log(this.products);
       });
       
    })
  }

}
