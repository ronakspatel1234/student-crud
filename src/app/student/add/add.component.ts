import { Component, OnInit } from '@angular/core';
import { Student } from '../../student.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EMAIL_VALIDATOR } from '@angular/forms/src/directives/validators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
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

    this.formLoad();
  }
  private formLoad() {
    this.profileForm = this.fb.group({
      id: ['',[ Validators.required]],
      name: ['', [Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required,Validators.email]],
      subject: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]]
    });
  }
  get name() { return this.profileForm.get('name'); }
  get email() {return this.profileForm.get('email');}

  public onSubmit(): void {
    this.service.addStudent(this.profileForm.value).subscribe();
    this.router.navigate(['/studentlist']);

  }

}
