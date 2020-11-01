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
import { AuthGuard } from './share/guard/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'students',
    component: StudentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-student',
    component: AddStudentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-student/:id',
    component: AddStudentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'faculties',
    component: FacultiesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-faculty',
    component: AddFacultyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-faculty/:id',
    component: AddFacultyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'batchs',
    component: BatchsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-batch',
    component: AddBatchComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'semesters',
    component: SemestersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-semester',
    component: AddSemesterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'baskets',
    component: BasketsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-basket',
    component: AddBasketComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-basket/:id',
    component: AddBasketComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'subjects',
    component: SubjectsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-subject',
    component: AddSubjectComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-subject/:id',
    component: AddSubjectComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
