import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService} from '../../core/service/auth.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-add-semester',
  templateUrl: './add-semester.component.html',
  styleUrls: ['./add-semester.component.css']
})
export class AddSemesterComponent implements OnInit {

  addsemesterForm: FormGroup;
  submitted:boolean = false;
  seId: any;
  title: string = 'Add Semester';

  constructor(private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private activeRoute: ActivatedRoute){ 
      this.seId = activeRoute.snapshot.params.id;
    //   if(this.fId) {
    //     this.title = 'Edit Faculty';
    //     this.getFaculties();
    //   }
  }

  ngOnInit(): void {
    this.addsemesterForm = this.formBuilder.group({
      semester_no: ['',Validators.required],
      semester_id: ['',Validators.required],
      
  });
}
get f() { return this.addsemesterForm.controls; }

onSubmit() {
  this.submitted = true;
  console.log(this.addsemesterForm.value);

  // stop here if form is invalid
  if (this.addsemesterForm.invalid) {
      return;
  }
  if(!this.seId) {
    this.service.getAddSemester(this.addsemesterForm.value).subscribe((res) => {
      alert('Add Semester sucessfully.');
      this.addsemesterForm.reset();
      this.submitted = false;
      this.router.navigate(['/semesters']);
    });
//   }else {
//     this.service.getEditFaculty(this.addfacultyForm.value).subscribe((res) => {
//       alert('Edit faculty sucessfully.');
//       this.addfacultyForm.reset();
//       this.submitted = false;
//       this.router.navigate(['/faculties']);
//     });
  }

}

onReset() {
  this.submitted = false;
  this.addsemesterForm.reset();
}

  getSemesters() {
    this.service.getSemester(this.seId).subscribe((res) => {
      this.addsemesterForm.patchValue(res);
    })
  }
}
