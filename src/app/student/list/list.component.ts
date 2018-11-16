import { Component, OnInit } from '@angular/core';
import { Student } from '../../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public students: Student[];
  
  constructor(private service: StudentService) {
    this.students = [];
    
  }

  ngOnInit() {
    this.getStudents();
  }
  getStudents(): void {
    this.service.getStudents().subscribe(students => this.students = students);
  }
  deleteStudent(id:number):void{
    this.service.deleteStudent(id).subscribe(()=>{this.getStudents(),alert('delete student successfully')});
  }
 
}
