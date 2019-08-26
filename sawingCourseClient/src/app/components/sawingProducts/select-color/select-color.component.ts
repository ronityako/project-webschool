import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-color',
  templateUrl: './select-color.component.html',
  styleUrls: ['./select-color.component.css']
})
export class SelectColorComponent implements OnInit {

  @Input() colorsList:any[] = [];
  @Output() selectedColor = new EventEmitter();

  colorSelected(color){
    console.log("in colorSelected()" + color);
    this.selectedColor.emit(color); 
  }

  constructor() { }

  ngOnInit() {
  }

}
