import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DALService } from '../../../services/dal.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  @Input() chosenStudent:any;
  @Output() studentClosed = new EventEmitter();
  paymentWin = false;
  paymentsInTable:any[] = [];
  currentPayments = 1;
  note:String;
  COST = 280;
  diff:number = 0;

  submitForm(valid : boolean)
  {
    if(valid){
      this.dalSrv.updateDB('http://localhost:3000/students', this.chosenStudent).subscribe(data=>{
        console.log(data);
        this.studentClosed.emit(true);});
      
    }
  }
  
  addToTable(payment){
    this.paymentWin = false;
    if(payment){
      this.chosenStudent.payments.push(payment);
      if(this.paymentsInTable.length < 4){
        this.paymentsInTable.push(payment);
      }
    }
    this.calculateDiff();
  }

  delStudent(){
    this.dalSrv.deleteFromDB('http://localhost:3000/students', 'id', this.chosenStudent.id).subscribe(
      data=>{console.log(data);
      this.studentClosed.emit(true);
      });
  }
  
  previous(){
    if(this.currentPayments > 1){
      this.currentPayments--;
      for(let i = 0; i < 4; i++){
        this.paymentsInTable[i] = this.chosenStudent.payments[i + (this.currentPayments - 1) * 4];
      }
    }
  }

  next(){
    if(this.currentPayments < Math.ceil(this.chosenStudent.payments.length / 4)){
      var i = 0;
      while(this.chosenStudent.payments[i + this.currentPayments * 4] && i < 4){
        this.paymentsInTable[i] = this.chosenStudent.payments[i + this.currentPayments * 4];
        i++;
      }
      if(i < 4)
        this.paymentsInTable.splice(i, 4 - i);

      this.currentPayments++;
      console.log(this.paymentsInTable);
    }
  }

  calculateDiff(){
    this.diff = 0;
    this.chosenStudent.payments.forEach(element => {
      console.log(`diff = ${this.diff}, element = ${element.amount}`);
      this.diff += (element.amount - this.COST);
    });
    console.log(this.diff);
  }
  
  constructor( private dalSrv:DALService) { }

  ngOnInit() {
    var i = 0;
    while(this.chosenStudent.payments[i] && i < 4){
      console.log(`in while, i = ${i}`)
      this.paymentsInTable[i] = this.chosenStudent.payments[i];
      i++;
    }
    this.calculateDiff();
  }

}
