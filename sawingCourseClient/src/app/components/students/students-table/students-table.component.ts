import { Component, OnInit, Output, EventEmitter, OnChanges, Input } from '@angular/core';
import { DALService } from '../../../services/dal.service';
import { Student } from '../../../classes/student';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit, OnChanges {

  students:Student[] = [];
  studentsInTable:Student[] = [];
  currentStudents = 1;
  @Output() newId = new EventEmitter();
  @Input() newStudent:Student;
  loaded:boolean = false;
  showPopup: boolean = false;

  chosen:number = 0;

  chosenStudent:Student = {id:0,
    fullName: '', 
    phone: '',
    mobile: '', 
    school: '', 
    class: '',
    group: 0,
    startDate: '',
    payments:[] };

  copyStudent(student){
    this.chosen = student.id;
    console.log(`student: ${student.phone}`);
    console.log(`chosenStudent: ${this.chosenStudent}`);
    // this.chosenStudent.id = student.id, 
    // this.chosenStudent.fullName = student.fullName;
    // this.chosenStudent.phone = student.phone;
    // this.chosenStudent.mobile = student.mobile;
    // this.chosenStudent.school = student.school;
    // this.chosenStudent.class = student.class;
    // this.chosenStudent.group = student.group;
    // this.chosenStudent.startDate = student.startDate;
    // this.chosenStudent.payments = student.payments;

    this.chosenStudent = Object.assign({}, student);

    this.showPopup = true;
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
    console.log('in next');
    console.log(this.currentStudents);
    console.log(this.students.length);
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

  closeUpdate(update:any){
    if(!update){
      this.chosen = 0;
      this.showPopup = false;
    }
    else if(Object.entries(update).length == 0){ // empty object => delete
      let index = this.students.map( x => {return x.id} ).indexOf(this.chosen);
      this.students.splice(index, 1);
      console.log('in closeUpdate, delete');
      console.log(this.students);
      this.studentsInTable.pop();
      this.refreshTable();
      console.log(this.studentsInTable);
    }
    else if(update){ // updated object
      console.log('in update');
      // this.dalSrv.getFromDB('http://localhost:3000/students').subscribe(data => {
      // this.students = data;
      console.log(update);
      let index = this.students.map( x => {return x.id} ).indexOf(this.chosen);
      this.students[index] = update;
      console.log(this.students[index]);
      this.refreshTable();
      console.log(this.students);
    // });
    }
    this.chosen = 0;
    this.showPopup = false;
  }

  refreshTable(){
    let length = 8;
      if(this.students.length < 8){
        length = this.students.length;
      }
      for(let i = 0; i < length; i++){
        this.studentsInTable[i] = this.students[i];
      }
      this.currentStudents = 1;
      console.log('refresh-table')
  }

  constructor( private dalSrv:DALService ) { }

  ngOnChanges(){
    console.log('ngOnChanges ');
    console.log(this.newStudent);
    this.students.push(this.newStudent);
    this.refreshTable();
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.dalSrv.getFromDB('http://localhost:3000/students').subscribe(data => {
      this.students = data;
      console.log(this.students);
      let newId; 
      if(this.students.length > 0)
        newId = this.students[this.students.length - 1].id + 1;
      else
        newId = 1;
      console.log(`newId = ${newId}`);
      this.newId.emit(newId);
      var i = 0;
      // while(this.students[i] && i < 8){
      //   console.log(`in while, i = ${i}`)
      //   this.studentsInTable[i] = this.students[i];
      //   i++;
      // }

      this.refreshTable();
      this.loaded = true;
      // for(let i = 0; i < 8; i++){
      //   this.studentsInTable[i] = this.students[i];
      // }
      console.log(this.students);
    });
  }

}