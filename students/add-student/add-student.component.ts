import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService} from '../../core/service/auth.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addstudentForm: FormGroup;
  submitted:boolean = false;
  sId: any;
  title: string = 'Add Student';

  constructor(private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private activeRoute: ActivatedRoute){ 
      this.sId = activeRoute.snapshot.params.id;
      if(this.sId) {
        this.title = 'Edit Student';
        this.getStudents();
      }
  }

  ngOnInit(): void {
    this.addstudentForm = this.formBuilder.group({
      student_no: ['', Validators.required],
      student_name: ['', Validators.required],
      student_id: ['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      branch: ['', Validators.required],
      department: ['', Validators.required],
      school: ['', Validators.required],
      academic_year: ['', Validators.required],
      batch_id: ['', Validators.required]
      
  });
}
get f() { return this.addstudentForm.controls; }

onSubmit() {
  this.submitted = true;
  console.log(this.addstudentForm.value);

  // stop here if form is invalid
  if (this.addstudentForm.invalid) {
      return;
  }
  if(!this.sId) {
    this.service.getAddStudent(this.addstudentForm.value).subscribe((res) => {
      alert('Add student sucessfully.');
      this.addstudentForm.reset();
      this.submitted = false;
      this.router.navigate(['/students']);
    });
  }else {
    this.service.getEditStudent(this.addstudentForm.value).subscribe((res) => {
      alert('Edit student sucessfully.');
      this.addstudentForm.reset();
      this.submitted = false;
      this.router.navigate(['/students']);
    });
  }

}

onReset() {
  this.submitted = false;
  this.addstudentForm.reset();
}

  getStudents() {
    this.service.getStudent(this.sId).subscribe((res) => {
      this.addstudentForm.patchValue(res);
    })
  }
}
