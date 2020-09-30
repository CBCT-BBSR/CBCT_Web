import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../core/service/auth.service';
  
@Component({
  selector: 'app-baskets',
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.css']
})
export class BasketsComponent implements OnInit {
  
    public baList: any = [];
    public baTmpList: any = [];
  
    constructor(private service: AuthService) { }
  
    ngOnInit(): void {
      this.getAllBaskets();
    }
  
    getAllBaskets() {
      this.service.getAllBaskets().subscribe((res) => {
        this.baList = res;
        this.baTmpList = res;
      });
    }
  
    // delete(id: number){
    //   this.service.getDeleteFaculty(id).subscribe((res) => {
    //    alert('Delete Faculty successfully..');
    //     this.getAllFaculties();
    //   });
    // }

    search(e){
      this.baList = [];
      console.log(e.target.value);
      if(e.target.value) {

       // this.sList =  this.sTmpList.find( ({ data }) => data.student_id ==  e.target.value );
        this.baTmpList.forEach(item => {
          if(item.basket_id.toString().indexOf(e.target.value ) !== -1){
            this.baList.push(item);
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
      this.baList = this.baTmpList;
    }
    }
  
  }
  
