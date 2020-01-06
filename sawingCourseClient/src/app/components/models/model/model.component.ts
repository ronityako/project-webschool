import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  pictureX:number;
  pictureY:number;
  innerWidth:number;
  innerHeight:number;


  @Input() picture:String;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    this.pictureX = e.clientX;
    this.pictureY = e.clientY;
  };

  setPosition() {
    let posY = this.pictureY;
    console.log('before condition: ' + posY);
    if(this.pictureY + 400 >= this.innerHeight ){
      // console.log('hi0');     
      posY = this.innerHeight - 400;
    }
    console.log(posY);
    let posX = this.pictureX + 50;
    if(this.pictureX + 50 + 400 >= this.innerWidth ){
      posX = this.innerWidth - 630;
    }
    let styles = {
      'top': `${posY}px`,
      'left': `${posX}px`
    };
    console.log(styles);

    return styles;
  }

  constructor() { }

  ngOnInit() {
    this.innerWidth = document.body.clientWidth;
    this.innerHeight = document.body.clientHeight;
  }

}
