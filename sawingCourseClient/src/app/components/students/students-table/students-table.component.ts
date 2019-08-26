import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DALService } from '../../../services/dal.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {

  students:any[] = [];
  studentsInTable:any[] = [];
  currentStudents = 1;
  @Output() newId = new EventEmitter();

  chosen = false;
  chosenStudent:any = {id:0,
    fullName: '', 
    phone: '',
    mobile: '', 
    school: '', 
    class: '',
    group: 0,
    startDate: '',
    payments:[] };

  copyStudent(student){
    this.chosen = true;
    console.log(`student: ${student.phone}`);
    console.log(`chosenStudent: ${this.chosenStudent}`);
    this.chosenStudent.id = student.id, 
    this.chosenStudent.fullName = student.fullName;
    this.chosenStudent.phone = student.phone;
    this.chosenStudent.mobile = student.mobile;
    this.chosenStudent.school = student.school;
    this.chosenStudent.class = student.class;
    this.chosenStudent.group = student.group;
    this.chosenStudent.startDate = student.startDate;
    this.chosenStudent.payments = student.payments;
  }

  previous(){
    if(this.currentStudents > 1){
      this.currentStudents--;
      for(let i = 0; i < 8; i++){
        this.studentsInTable[i] = this.students[i + (this.currentStudents - 1) * 8];
      }
    }
  }

  next(){
    if(this.currentStudents < Math.ceil(this.students.length / 8)){
      var i = 0;
      while(this.students[i + this.currentStudents * 8] && i < 8){
        this.studentsInTable[i] = this.students[i + this.currentStudents * 8];
        i++;
      }
      if(i < 8)
        this.studentsInTable.splice(i, 8 - i);

      this.currentStudents++;
      console.log(this.studentsInTable);
    }
  }

  closeUpdate(update:boolean){
    this.chosen = false;
    if(update){
      console.log('in update');
      this.dalSrv.getFromDB('http://localhost:3000/students').subscribe(data => {
      this.students = data;
      console.log(this.students);
      for(let i = 0; i < 8; i++){
          this.studentsInTable[i] = this.students[i];
      }
      console.log(this.students);
    });
    }
  }
  constructor( private dalSrv:DALService ) { }

  ngOnInit() {
    this.dalSrv.getFromDB('http://localhost:3000/students').subscribe(data => {
      this.students = data;
      console.log(this.students);
      // let newId; 
      // if(this.students.length > 0)
      //   newId = this.students[length - 1].id + 1;
      // else
      //   newId = 1;
      // this.newId.emit(newId);
      var i = 0;
      while(this.students[i] && i < 8){
        console.log(`in while, i = ${i}`)
        this.studentsInTable[i] = this.students[i];
        i++;
      }

      // for(let i = 0; i < 8; i++){
      //   this.studentsInTable[i] = this.students[i];
      // }
      console.log(this.students);
    });
  }

}