import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  newStudent;

  addStudent = false;

  newId;

  closeNewStudent(newStudent){
    this.addStudent = false;
    if(newStudent){
      this.newId++;
      this.newStudent = newStudent;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
