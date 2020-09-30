import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { LoginComponent } from './core/authentication/login/login.component';
import { AddStudentComponent } from './modules/add-student/add-student.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { StudentsComponent } from './modules/students/students.component';
import { FacultiesComponent } from './modules/faculties/faculties.component';
import { AddFacultyComponent } from './modules/add-faculty/add-faculty.component';

const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'add-student',
    component: AddStudentComponent
  },
  {
    path: 'edit-student/:id',
    component: AddStudentComponent
  },
  {
    path: 'faculties',
    component: FacultiesComponent
  },
  {
    path: 'add-faculty',
    component: AddFacultyComponent
  },
  {
    path: 'edit-faculty/:id',
    component: AddFacultyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
