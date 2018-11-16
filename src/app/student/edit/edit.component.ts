import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../student.model';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public student: Student;
  public profileForm: FormGroup;



  constructor(private service: StudentService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) {
    this.student = new Student();
    this.profileForm = new FormGroup({});
  }


  ngOnInit() {
    this.editStudent();
    this.formLoad();
  }
  private formLoad() {
    this.profileForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    });
  }
  public formData(student: Student): void {
    this.profileForm.setValue({
      id: student.id,
      name: student.name,
      email: student.email,
      subject: student.subject,
      dateOfBirth: student.dateOfBirth
    })
  }
  private editStudent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.editStudent(id).subscribe(student => {
      this.student = student,
        this.formData(student),
        console.log(student);
    });
  }
  public onSubmit(): void {
    this.service.updateStudent(this.profileForm.value).subscribe();
    this.router.navigate(['/studentlist']);
  }
}
