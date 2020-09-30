import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { LoginComponent } from './core/authentication/login/login.component';
import { AddStudentComponent } from './modules/add-student/add-student.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { StudentsComponent } from './modules/students/students.component';
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
  },
  {
    path: 'batchs',
    component: BatchsComponent
  },
  {
    path: 'add-batch',
    component: AddBatchComponent
  },
  {
    path: 'semesters',
    component: SemestersComponent
  },
  {
    path: 'add-semester',
    component: AddSemesterComponent
  },
  {
    path: 'baskets',
    component: BasketsComponent
  },
  {
    path: 'add-basket',
    component: AddBasketComponent
  },
  {
    path: 'edit-basket/:id',
    component: AddBasketComponent
  },
  {
    path: 'subjects',
    component: SubjectsComponent
  },
  {
    path: 'add-subject',
    component: AddSubjectComponent
  },
  {
    path: 'edit-subject/:id',
    component: AddSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
