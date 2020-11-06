import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from './../../service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public errorMsg: string;
  public passwordType: string = 'password';
  public firstScreen: boolean = false;
  public isSubmit: boolean = false;


  constructor(
    public _router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
    this.createForm();
    // /*******Back button disable***********/
    // window.location.hash = 'login';
    // window.location.hash = 'Again-No-back-button'; // again because google chrome don't insert first hash into history
    // window.onhashchange = function () {
    //   window.location.hash = 'login';
    // };

  }

  ngOnInit() {
   
  }

  ngOnDestroy(): void {
   
  }


  createForm() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
     });
  }

  submitLogin() {
    this.errorMsg = '';
    this.isSubmit = true;
    const data = this.form.value;
    console.log(data);
    if (this.form.valid) {
      this.authService.forgotPassword(data).subscribe(
        res => {
          if (res.code === 444 && res.status === 0) {
            this.errorMsg = res.message;
          } else {
          
              this._router.navigate(['/']);
            } 
          
        },
        error => {
          console.log(error);
        }
      );
    } else{
      this.errorMsg = 'Somethig wrong.. Try again..';
    }
  }

  onSuccess(res) {
    if (res.status === 1) {
      if (res.data != null && res.code === 200) {
        if (window.localStorage !== undefined) {
          window.localStorage.setItem('currentUser', JSON.stringify(res.data));
          window.localStorage.setItem('isLoggin', '1');
        } else {
          alert('Your browser is outdated!');
        }

        this._router.navigate(['/auth/teams-condtion']);
        
      }
    } else {
      this._router.navigate(['/auth/']);
      this.errorMsg = res.message;
    }
    this.isSubmit = false;
  }

  get frmuUsername() {
    return this.form.get('username');
  }

  get frmPassword() {
    return this.form.get('password');
  }
 
  closeMsg() {
    this.errorMsg = '';
  }

  viewPassword(type) {
    if (type === 'password') {
      this.passwordType = 'text';
    }
    if (type === 'text') {
      this.passwordType = 'password';
    }
  }

}
