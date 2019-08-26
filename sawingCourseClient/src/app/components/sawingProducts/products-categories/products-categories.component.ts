import { Component, OnInit } from '@angular/core';
import { DALService } from '../../../services/dal.service';

@Component({
  selector: 'app-products-categories',
  templateUrl: './products-categories.component.html',
  styleUrls: ['./products-categories.component.css']
})
export class ProductsCategoriesComponent implements OnInit {

  categories:any[] = [];

  constructor(private dalSrv:DALService) { }

  ngOnInit() {
    this.dalSrv.getFromDB('http://localhost:3000/productsCategories').subscribe(data => {
      this.categories = data;
      console.log(this.categories);
    });
  }

}
