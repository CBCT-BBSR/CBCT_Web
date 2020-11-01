import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService} from '../../core/service/auth.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  addsubjectForm: FormGroup;
  submitted:boolean = false;
  suId: any;
  title: string = 'Add Subject';

  constructor(private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private activeRoute: ActivatedRoute){ 
      this.suId = activeRoute.snapshot.params.id;
      if(this.suId) {
        this.title = 'Edit Subject';
        this.getSubjects();
      }
  }

  ngOnInit(): void {
    this.addsubjectForm = this.formBuilder.group({
      subject_no: ['',Validators.required],
      subject_name: ['',Validators.required],
      subject_code: ['',Validators.required],
      subject_credit:['',Validators.required],
      subject_type:['',Validators.required],
      basket_id:['',Validators.required]
      
  });
}
get f() { return this.addsubjectForm.controls; }

onSubmit() {
  this.submitted = true;
  console.log(this.addsubjectForm.value);

  // stop here if form is invalid
  if (this.addsubjectForm.invalid) {
      return;
  }
  if(!this.suId) {
    this.service.getAddSubject(this.addsubjectForm.value).subscribe((res) => {
      alert('Add subject sucessfully.');
      this.addsubjectForm.reset();
      this.submitted = false;
      this.router.navigate(['/subjects']);
    });
  }else {
    this.service.getEditSubject(this.addsubjectForm.value).subscribe((res) => {
      alert('Edit subject sucessfully.');
      this.addsubjectForm.reset();
      this.submitted = false;
      this.router.navigate(['/subjects']);
    });
  }

}

onReset() {
  this.submitted = false;
  this.addsubjectForm.reset();
}

  getSubjects() {
    this.service.getSubject(this.suId).subscribe((res) => {
      this.addsubjectForm.patchValue(res);
    })
  }
}
