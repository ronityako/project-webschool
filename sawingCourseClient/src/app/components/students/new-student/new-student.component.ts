import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DALService } from '../../../services/dal.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  @Output() studentClosed = new EventEmitter();
  @Input() studentId;
  @Input() showPopup:boolean;

  isMobile:boolean = false;
  paymentWin:boolean = false;
  newStudent:any = {
    id: '', 
    fullName: '',
    phone: '',
    mobile: '',
    school: '',
    class: '',
    group: 0,
    startDate: '',
    payments: []
  };
  COST = 280;
  diff:number = 0;

  addToTable(payment){
    this.paymentWin = false;
    if(payment){
      this.newStudent.payments.push(payment);
    }
    this.calculateDiff();
  }

  submitForm(valid){
    console.log(this.newStudent.startDate);
    this.newStudent.id = this.studentId;
    if(valid){
      this.dalSrv.postNewToDB('http://localhost:3000/students', this.newStudent).subscribe(data=>this.studentClosed.emit(data));
    }
  }

  calculateDiff(){
    this.diff = 0;
    this.newStudent.payments.forEach(element => {
      console.log(`diff = ${this.diff}, element = ${element.amount}`);
      this.diff += (element.amount - this.COST);
    });
    console.log(this.diff);
  }
  

  constructor( private dalSrv:DALService ) { }

  ngOnInit() {
    console.log(this.studentId);
    if(window.screen.width <=480 ){
      console.log('mobile');
      this.isMobile = true;

    }
  }

}
