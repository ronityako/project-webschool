import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  li1 = false;
  li2 = false;
  li3 = false;
  li4 = false;
  li5 = false;
  li6 = false;
  
  insertMenuItems(){
    setTimeout(() => {
      this.li1= true;
    }, 1000);
    setTimeout(() => {
      this.li2= true;
    }, 1100);
    setTimeout(() => {
      this.li3= true;
    }, 1200);
    setTimeout(() => {
      this.li4= true;
    }, 1300);
    setTimeout(() => {
      this.li5= true;
    }, 1400);
    setTimeout(() => {
      this.li6= true;
    }, 1500);
  }
  
  constructor() { }

  ngOnInit() {
    this.insertMenuItems();
  }
  

}
