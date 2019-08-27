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
  paymentWin = false;
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

  addToTable(payment){
    this.paymentWin = false;
    if(payment){
      this.newStudent.payments.push(payment);
    }
  }

  submitForm(valid){
    console.log(this.newStudent.startDate);
    this.newStudent.id = this.studentId;
    if(valid){
      this.dalSrv.postNewToDB('http://localhost:3000/students', this.newStudent).subscribe(data=>this.studentClosed.emit(data));
    }
  }

  constructor( private dalSrv:DALService ) { }

  ngOnInit() {
    console.log(this.studentId);
  }

}
