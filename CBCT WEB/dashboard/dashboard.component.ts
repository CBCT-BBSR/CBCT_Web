import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../core/service/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public sList: any = [];

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.service.dashboard().subscribe((res) => {
      this.sList = res;
    });
  }

  delete(id: number){
    this.service.getDeleteStudent(id).subscribe((res) => {
     alert('Delete Student successfully..');
      this.getAllStudents();
    });
  }

}
