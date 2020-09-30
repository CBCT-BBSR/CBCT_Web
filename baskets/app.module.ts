import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './core/authentication/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AuthService } from './core/service/auth.service';
import { StudentsComponent } from './modules/students/students.component';
import { AddStudentComponent } from './modules/add-student/add-student.component';
import { FacultiesComponent } from './modules/faculties/faculties.component';
import { AddFacultyComponent } from './modules/add-faculty/add-faculty.component';
import { BatchsComponent } from './modules/batchs/batchs.component';
import { AddBatchComponent } from './modules/add-batch/add-batch.component';
import { SemestersComponent } from './modules/semesters/semesters.component';
import { AddSemesterComponent } from './modules/add-semester/add-semester.component';
import { BasketsComponent } from './modules/baskets/baskets.component';
import { AddBasketComponent } from './modules/add-basket/add-basket.component';
import { SubjectsComponent } from './modules/subjects/subjects.component';
import { AddSubjectComponent } from './modules/add-subject/add-subject.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StudentsComponent,
    AddStudentComponent,
    FacultiesComponent,
    AddFacultyComponent,
    BatchsComponent,
    AddBatchComponent,
    SemestersComponent,
    AddSemesterComponent,
    BasketsComponent,
    AddBasketComponent,
    SubjectsComponent,
    AddSubjectComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  exports: [CommonModule],
  schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule { }
