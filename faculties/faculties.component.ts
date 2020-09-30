import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../core/service/auth.service';
  
@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent implements OnInit {
  
    public fList: any = [];
    public fTmpList: any = [];
  
    constructor(private service: AuthService) { }
  
    ngOnInit(): void {
      this.getAllFaculties();
    }
  
    getAllFaculties() {
      this.service.getAllFaculties().subscribe((res) => {
        this.fList = res;
        this.fTmpList = res;
      });
    }
  
    delete(id: number){
      this.service.getDeleteFaculty(id).subscribe((res) => {
       alert('Delete Faculty successfully..');
        this.getAllFaculties();
      });
    }

    search(e){
      this.fList = [];
      console.log(e.target.value);
      if(e.target.value) {

       // this.sList =  this.sTmpList.find( ({ data }) => data.student_id ==  e.target.value );
        this.fTmpList.forEach(item => {
          if(item.facultyid.toString().indexOf(e.target.value ) !== -1){
            this.fList.push(item);
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
      this.fList = this.fTmpList;
    }
    }
  
  }
  
