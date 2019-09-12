import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deal-form',
  templateUrl: './deal-form.component.html',
  styleUrls: ['./deal-form.component.css']
})
export class DealFormComponent implements OnInit {

  @Input() subTotal;
  @Output() dealClosed = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}
