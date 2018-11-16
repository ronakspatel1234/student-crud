import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../student.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentService {
  private baseUrl = 'api/students'

  constructor(private http: HttpClient) { }
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl);
  }
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, student);
  }
  deleteStudent(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Student>(url);
  }
  editStudent(id: number): Observable<Student> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Student>(url);
  }
  updateStudent(student:Student):Observable<Student>{
    return this.http.put<Student>(this.baseUrl,student);
  }

}
