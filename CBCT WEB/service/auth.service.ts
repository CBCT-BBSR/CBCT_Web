import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {tap, retry, shareReplay} from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';
import {EnvService} from './env.service';
import {User} from '../../share/model/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;
  token: any;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    private env: EnvService,
    private route: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(data) {
    return this.http.get(this.env.API_URL + 'login/'+ data.username + '/' + data.password  + '/' + data.role).pipe(
      tap((token: any) => {
        if (token.email) {
          const data = {'email': token.email, 'token': token.email,'role': token.role};
          localStorage.setItem('currentUser', JSON.stringify(data));
          this.token = data;
          this.isLoggedIn = true;
          this.currentUserSubject.next(this.token);
        }
        return token;
      }),
    );
  }

  changePassword(data) {
    return this.http.post(this.env.API_URL + 'change-password', data).pipe(
      tap((token: any) => {
        return token;
      }),
    );
  }

  logout() {
      localStorage.clear();
      sessionStorage.clear();
      this.currentUserSubject.next(null);
      this.isLoggedIn = false;
      delete this.token;
      this.route.navigate(['/auth']);
     
  }

  accessDenide() {
    localStorage.clear();
    sessionStorage.clear();
    this.currentUserSubject.next(null);
    this.isLoggedIn = false;
    delete this.token;
    this.route.navigate(['/auth']);
  }

  dashboard() {
    return this.http.get<any>(this.env.API_URL + 'student') // , {headers: headers}
      .pipe(
        tap(res => {
          if ([444, 403].indexOf(res.code) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            this.accessDenide();
            // location.reload(true);
          }
          return res;
        })
      );
  }
//student crud 
  getAllStudents() {
    return this.http.get<any>(this.env.API_URL + 'student') // , {headers: headers}
      .pipe(
        tap(res => {
          if ([444, 403].indexOf(res.code) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            this.accessDenide();
            // location.reload(true);
          }
          return res;
        })
      );
  }

  getStudent(id) {
    return this.http.get<any>(this.env.API_URL + 'student/'+ id) // , {headers: headers}
      .pipe(
        tap(res => {
          if ([444, 403].indexOf(res.code) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            this.accessDenide();
            // location.reload(true);
          }
          return res;
        })
      );
  }

  getAddStudent(data) {
    return this.http.post<any>(this.env.API_URL + 'student', data) // , {headers: headers}
      .pipe(
        tap(res => {
          // if ([444, 403].indexOf(res.code) !== -1) {
          //   // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          //   this.accessDenide();
          //   // location.reload(true);
          // }
          return res;
        })
      );
  }

  getEditStudent(data) {
    return this.http.put<any>(this.env.API_URL + 'student', data) // , {headers: headers}
      .pipe(
        tap(res => {
          if ([444, 403].indexOf(res.code) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            this.accessDenide();
            // location.reload(true);
          }
          return res;
        })
      );
  }

  getDeleteStudent(id) {
    return this.http.delete<any>(this.env.API_URL + 'student/'+ id) // , {headers: headers}
      .pipe(
        tap(res => {
          return res;
        })
      );
  }
//faculty crud
  getAllFaculties() {
    return this.http.get<any>(this.env.API_URL + 'faculty') // , {headers: headers}
      .pipe(
        tap(res => {
          if ([444, 403].indexOf(res.code) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            this.accessDenide();
            // location.reload(true);
          }
          return res;
        })
      );
  }
  getFaculty(id) {
    return this.http.get<any>(this.env.API_URL + 'faculty/'+ id) // , {headers: headers}
      .pipe(
        tap(res => {
          if ([444, 403].indexOf(res.code) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            this.accessDenide();
            // location.reload(true);
          }
          return res;
        })
      );
  }

  getAddFaculty(data) {
    return this.http.post<any>(this.env.API_URL + 'faculty', data) // , {headers: headers}
      .pipe(
        tap(res => {
          // if ([444, 403].indexOf(res.code) !== -1) {
          //   // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          //   this.accessDenide();
          //   // location.reload(true);
          // }
          return res;
        })
      );
  }

  getEditFaculty( data) {
    return this.http.put<any>(this.env.API_URL + 'faculty', data) // , {headers: headers}
      .pipe(
        tap(res => {
          if ([444, 403].indexOf(res.code) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            this.accessDenide();
            // location.reload(true);
          }
          return res;
        })
      );
  }

  getDeleteFaculty(id) {
    return this.http.delete<any>(this.env.API_URL + 'faculty/'+ id) // , {headers: headers}
      .pipe(
        tap(res => {
          // if ([444, 403].indexOf(res.code) !== -1) {
          //   // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          //   this.accessDenide();
          //   // location.reload(true);
          // }
          return res;
        })
      );
  }

  //batch crd

  getAllBatchs() {
    return this.http.get<any>(this.env.API_URL + 'batch') // , {headers: headers}
      .pipe(
        tap(res => {
          if ([444, 403].indexOf(res.code) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            this.accessDenide();
            // location.reload(true);
          }
          return res;
        })
      );
  }

  getBatch(id) {
    return this.http.get<any>(this.env.API_URL + 'batch/'+ id) // , {headers: headers}
      .pipe(
        tap(res => {
          if ([444, 403].indexOf(res.code) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            this.accessDenide();
            // location.reload(true);
          }
          return res;
        })
      );
  }

  getAddBatch(data) {
    return this.http.post<any>(this.env.API_URL + 'batch', data) // , {headers: headers}
      .pipe(
        tap(res => {
          // if ([444, 403].indexOf(res.code) !== -1) {
          //   // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          //   this.accessDenide();
          //   // location.reload(true);
          // }
          return res;
        })
      );
  }

  getDeleteBatch(id) {
    return this.http.delete<any>(this.env.API_URL + 'batch/'+ id) // , {headers: headers}
      .pipe(
        tap(res => {
          // if ([444, 403].indexOf(res.code) !== -1) {
          //   // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          //   this.accessDenide();
          //   // location.reload(true);
          // }
          return res;
        })
      );
  }

  //semester crd 

  getAllSemesters() {
    return this.http.get<any>(this.env.API_URL + 'semester') // , {headers: headers}
      .pipe(
        tap(res => {
          if ([444, 403].indexOf(res.code) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            this.accessDenide();
            // location.reload(true);
          }
          return res;
        })
      );
  }

  getSemester(id) {
    return this.http.get<any>(this.env.API_URL + 'semester/'+ id) // , {headers: headers}
      .pipe(
        tap(res => {
          if ([444, 403].indexOf(res.code) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            this.accessDenide();
            // location.reload(true);
          }
          return res;
        })
      );
  }


  getAddSemester(data) {
    return this.http.post<any>(this.env.API_URL + 'semester', data) // , {headers: headers}
      .pipe(
        tap(res => {
          // if ([444, 403].indexOf(res.code) !== -1) {
          //   // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          //   this.accessDenide();
          //   // location.reload(true);
          // }
          return res;
        })
      );
  }

  getDeleteSemester(id) {
    return this.http.delete<any>(this.env.API_URL + 'semester/'+ id) // , {headers: headers}
      .pipe(
        tap(res => {
          // if ([444, 403].indexOf(res.code) !== -1) {
          //   // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          //   this.accessDenide();
          //   // location.reload(true);
          // }
          return res;
        })
      );
  }

  //basket cru

  getAllBaskets() {
    return this.http.get<any>(this.env.API_URL + 'basket') // , {headers: headers}
      .pipe(
        tap(res => {
          if ([444, 403].indexOf(res.code) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            this.accessDenide();
            // location.reload(true);
          }
          return res;
        })
      );
  }

  getBasket(id) {
    return this.http.get<any>(this.env.API_URL + 'basket/'+ id) // , {headers: headers}
      .pipe(
        tap(res => {
          if ([444, 403].indexOf(res.code) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            this.accessDenide();
            // location.reload(true);
          }
          return res;
        })
      );
  }

  getAddBasket(data) {
    return this.http.post<any>(this.env.API_URL + 'basket', data) // , {headers: headers}
      .pipe(
        tap(res => {
          // if ([444, 403].indexOf(res.code) !== -1) {
          //   // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          //   this.accessDenide();
          //   // location.reload(true);
          // }
          return res;
        })
      );
  }

  getEditBasket( data) {
    return this.http.put<any>(this.env.API_URL + 'basket', data) // , {headers: headers}
      .pipe(
        tap(res => {
          if ([444, 403].indexOf(res.code) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            this.accessDenide();
            // location.reload(true);
          }
          return res;
        })
      );
  }

  //subject crud

  getAllSubjects() {
    return this.http.get<any>(this.env.API_URL + 'subject') // , {headers: headers}
      .pipe(
        tap(res => {
          if ([444, 403].indexOf(res.code) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            this.accessDenide();
            // location.reload(true);
          }
          return res;
        })
      );
  }

  getSubject(id) {
    return this.http.get<any>(this.env.API_URL + 'subject/'+ id) // , {headers: headers}
      .pipe(
        tap(res => {
          if ([444, 403].indexOf(res.code) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            this.accessDenide();
            // location.reload(true);
          }
          return res;
        })
      );
  }

  getAddSubject(data) {
    return this.http.post<any>(this.env.API_URL + 'subject', data) // , {headers: headers}
      .pipe(
        tap(res => {
          // if ([444, 403].indexOf(res.code) !== -1) {
          //   // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          //   this.accessDenide();
          //   // location.reload(true);
          // }
          return res;
        })
      );
  }

  getEditSubject( data) {
    return this.http.put<any>(this.env.API_URL + 'subject', data) // , {headers: headers}
      .pipe(
        tap(res => {
          if ([444, 403].indexOf(res.code) !== -1) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            this.accessDenide();
            // location.reload(true);
          }
          return res;
        })
      );
  }

  getDeleteSubject(id) {
    return this.http.delete<any>(this.env.API_URL + 'subject/'+ id) // , {headers: headers}
      .pipe(
        tap(res => {
          // if ([444, 403].indexOf(res.code) !== -1) {
          //   // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          //   this.accessDenide();
          //   // location.reload(true);
          // }
          return res;
        })
      );
  }


//Token



  getToken() {
    this.token = JSON.parse(localStorage.getItem('currentUser'));
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  accessDenied() {
    localStorage.clear();
    sessionStorage.clear();
    this.currentUserSubject.next(null);
    this.isLoggedIn = false;
    delete this.token;
    return false;
  }

}
