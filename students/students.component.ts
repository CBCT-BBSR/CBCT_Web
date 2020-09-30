import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../core/service/auth.service';
  
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  
    public sList: any = [];
    public sTmpList: any = [];
  
    constructor(private service: AuthService) { }
  
    ngOnInit(): void {
      this.getAllStudents();
    }
  
    getAllStudents() {
      this.service.dashboard().subscribe((res) => {
        this.sList = res;
        this.sTmpList = res;
      });
    }
  
    delete(id: number){
      this.service.getDeleteStudent(id).subscribe((res) => {
       alert('Delete Student successfully..');
        this.getAllStudents();
      });
    }

    search(e){
      this.sList = [];
      console.log(e.target.value);
      if(e.target.value) {

       // this.sList =  this.sTmpList.find( ({ data }) => data.student_id ==  e.target.value );
        this.sTmpList.forEach(item => {
          if(item.student_id.toString().indexOf(e.target.value ) !== -1){
            this.sList.push(item);
            return;
          }
        });
      // this.sList = this.sTmpList.filter((x) =>{
      //  // val['name'].includes(value)
      //  // x.student_id.includes(e.target.value);
      //  x.student_id.toString() == e.target.value;
      //   console.log(x.student_id);
      // });
    }else {
      this.sList = this.sTmpList;
    }
    }
  
  }
  
