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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StudentsComponent,
    AddStudentComponent,
    FacultiesComponent,
    AddFacultyComponent
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
