import { Component, OnInit } from '@angular/core';
import { DALService } from '../../../services/dal.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  models:any[] = [];
  showModel = {};
  image;
  leavePicture(){
    for( var model in this.showModel ){
      this.showModel[model] = false;
    }
  }

  showPicture(i){
  if(this.image != i){
    for( var model in this.showModel ){
      this.showModel[model] = false;
    }
    this.showModel[i] = true;
    this.image = i;
  }

    
  }

  constructor(private dalSrv:DALService) { }

  ngOnInit() {
    this.dalSrv.getFromDB('http://localhost:3000/models').subscribe(data => {
      this.models = data;
      console.log(this.models);
    });
  }

}
