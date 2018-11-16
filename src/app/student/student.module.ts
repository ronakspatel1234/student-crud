import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { StudentService } from './student.service';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddComponent, ListComponent, EditComponent],
  providers:[StudentService ]
})
export class StudentModule { }
