import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService} from '../../core/service/auth.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-add-basket',
  templateUrl: './add-basket.component.html',
  styleUrls: ['./add-basket.component.css']
})
export class AddBasketComponent implements OnInit {

  addbasketForm: FormGroup;
  submitted:boolean = false;
  baId: any;
  title: string = 'Add Basket';

  constructor(private formBuilder: FormBuilder,
    private service: AuthService,
    private router: Router,
    private activeRoute: ActivatedRoute){ 
      this.baId = activeRoute.snapshot.params.id;
      if(this.baId) {
        this.title = 'Edit Basket';
        this.getBaskets();
      }
  }

  ngOnInit(): void {
    this.addbasketForm = this.formBuilder.group({
        basket_no: ['',Validators.required],
      basket_id: ['',Validators.required],
      basket_credit: ['',Validators.required],
      
  });
}
get f() { return this.addbasketForm.controls; }

onSubmit() {
  this.submitted = true;
  console.log(this.addbasketForm.value);

  // stop here if form is invalid
  if (this.addbasketForm.invalid) {
      return;
  }
  if(!this.baId) {
    this.service.getAddBasket(this.addbasketForm.value).subscribe((res) => {
      alert('Add basket sucessfully.');
      this.addbasketForm.reset();
      this.submitted = false;
      this.router.navigate(['/baskets']);
    });
  }else {
    this.service.getEditBasket(this.addbasketForm.value).subscribe((res) => {
      alert('Edit basket sucessfully.');
      this.addbasketForm.reset();
      this.submitted = false;
      this.router.navigate(['/baskets']);
    });
  }

}

onReset() {
  this.submitted = false;
  this.addbasketForm.reset();
}

  getBaskets() {
    this.service.getBasket(this.baId).subscribe((res) => {
      this.addbasketForm.patchValue(res);
    })
  }
}
