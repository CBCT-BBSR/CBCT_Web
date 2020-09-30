import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService} from '../../core/service/auth.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {

  addfacultyForm: FormGroup;
  submitted:boolean = false;
  fId: any;
  title: string = 'Add Faculty';

  constructor(private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private activeRoute: ActivatedRoute){ 
      this.fId = activeRoute.snapshot.params.id;
      if(this.fId) {
        this.title = 'Edit Faculty';
        this.getFaculties();
      }
  }

  ngOnInit(): void {
    this.addfacultyForm = this.formBuilder.group({
      facultyid: ['',Validators.required],
      facultyname: ['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      designation: ['',Validators.required]
      
  });
}
get f() { return this.addfacultyForm.controls; }

onSubmit() {
  this.submitted = true;
  console.log(this.addfacultyForm.value);

  // stop here if form is invalid
  if (this.addfacultyForm.invalid) {
      return;
  }
  if(!this.fId) {
    this.service.getAddFaculty(this.addfacultyForm.value).subscribe((res) => {
      alert('Add faculty sucessfully.');
      this.addfacultyForm.reset();
      this.submitted = false;
      this.router.navigate(['/faculties']);
    });
  }else {
    this.service.getEditFaculty(this.addfacultyForm.value).subscribe((res) => {
      alert('Edit faculty sucessfully.');
      this.addfacultyForm.reset();
      this.submitted = false;
      this.router.navigate(['/faculties']);
    });
  }

}

onReset() {
  this.submitted = false;
  this.addfacultyForm.reset();
}

  getFaculties() {
    this.service.getFaculty(this.fId).subscribe((res) => {
      this.addfacultyForm.patchValue(res);
    })
  }
}
