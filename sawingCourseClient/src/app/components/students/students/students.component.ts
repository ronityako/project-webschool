import { Component, OnInit } from '@angular/core';
import { Student } from '../../../classes/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  newStudent:Student;

  addStudent:boolean = false;

  newId:number;

  closeNewStudent(newStudent){
    this.addStudent = false; //close the popup
    if(newStudent){
      this.newId++;
      this.newStudent = newStudent;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
