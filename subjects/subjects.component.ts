import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../core/service/auth.service';
  
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  
    public suList: any = [];
    public suTmpList: any = [];
  
    constructor(private service: AuthService) { }
  
    ngOnInit(): void {
      this.getAllSubjects();
    }
  
    getAllSubjects() {
      this.service.getAllSubjects().subscribe((res) => {
        this.suList = res;
        this.suTmpList = res;
      });
    }
  
    delete(id: any){
      this.service.getDeleteSubject(id).subscribe((res) => {
       alert('Delete Subject successfully..');
        this.getAllSubjects();
      });
    }

    search(e){
      this.suList = [];
      console.log(e.target.value);
      if(e.target.value) {

       // this.sList =  this.sTmpList.find( ({ data }) => data.student_id ==  e.target.value );
        this.suTmpList.forEach(item => {
          if(item.subject_code.toString().indexOf(e.target.value ) !== -1){
            this.suList.push(item);
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
      this.suList = this.suTmpList;
    }
    }
  
  }
  
