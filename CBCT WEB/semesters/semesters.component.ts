import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../core/service/auth.service';
  
@Component({
  selector: 'app-semesters',
  templateUrl: './semesters.component.html',
  styleUrls: ['./semesters.component.css']
})
export class SemestersComponent implements OnInit {
  
    public seList: any = [];
    public seTmpList: any = [];
  
    constructor(private service: AuthService) { }
  
    ngOnInit(): void {
      this.getAllSemesters();
    }
  
    getAllSemesters() {
      this.service.getAllSemesters().subscribe((res) => {
        this.seList = res;
        this.seTmpList = res;
      });
    }
  
    delete(id: number){
      this.service.getDeleteSemester(id).subscribe((res) => {
       alert('Delete Semester successfully..');
        this.getAllSemesters();
      });
    }

    search(e){
      this.seList = [];
      console.log(e.target.value);
      if(e.target.value) {

       // this.sList =  this.sTmpList.find( ({ data }) => data.student_id ==  e.target.value );
        this.seTmpList.forEach(item => {
          if(item.semester_id.toString().indexOf(e.target.value ) !== -1){
            this.seList.push(item);
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
      this.seList = this.seTmpList;
    }
    }
  
  }
  
