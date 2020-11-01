import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService} from '../../core/service/auth.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.css']
})
export class AddBatchComponent implements OnInit {

  addbatchForm: FormGroup;
  submitted:boolean = false;
  bId: any;
  title: string = 'Add Batch';

  constructor(private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private activeRoute: ActivatedRoute){ 
      this.bId = activeRoute.snapshot.params.id;
    //   if(this.fId) {
    //     this.title = 'Edit Faculty';
    //     this.getFaculties();
    //   }
  }

  ngOnInit(): void {
    this.addbatchForm = this.formBuilder.group({
      batch_no: ['',Validators.required],
      batch_id: ['',Validators.required],
      
  });
}
get f() { return this.addbatchForm.controls; }

onSubmit() {
  this.submitted = true;
  console.log(this.addbatchForm.value);

  // stop here if form is invalid
  if (this.addbatchForm.invalid) {
      return;
  }
  if(!this.bId) {
    this.service.getAddBatch(this.addbatchForm.value).subscribe((res) => {
      alert('Add batch sucessfully.');
      this.addbatchForm.reset();
      this.submitted = false;
      this.router.navigate(['/batchs']);
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
  this.addbatchForm.reset();
}

  getBatchs() {
    this.service.getBatch(this.bId).subscribe((res) => {
      this.addbatchForm.patchValue(res);
    })
  }
}
