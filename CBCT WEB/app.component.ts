import { Component } from '@angular/core';
import {Router, ActivatedRoute, NavigationEnd, NavigationStart} from '@angular/router';
import {AuthService} from './core/service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cbct';
  public routerName: string;
  constructor(
    private router: Router,
    private auth: AuthService,
    private activeRoute: ActivatedRoute){ 
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.routerName = event.urlAfterRedirects;
        }
      });
    }


    logoutUser(): void {
      this.auth.logout();
      // this.auth.logout().subscribe((res) => {
      //   localStorage.clear();
      //   sessionStorage.clear();
      //   this.router.navigate(['/auth']);
      // });
    }
}
