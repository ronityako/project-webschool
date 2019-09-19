import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-model-form',
  templateUrl: './new-model-form.component.html',
  styleUrls: ['./new-model-form.component.css']
})
export class NewModelFormComponent implements OnInit {

  @Input() newModel;

  constructor() { }

  ngOnInit() {
  }

}
