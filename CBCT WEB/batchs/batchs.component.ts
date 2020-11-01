import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../core/service/auth.service';
  
@Component({
  selector: 'app-batchs',
  templateUrl: './batchs.component.html',
  styleUrls: ['./batchs.component.css']
})
export class BatchsComponent implements OnInit {
  
    public bList: any = [];
    public bTmpList: any = [];
  
    constructor(private service: AuthService) { }
  
    ngOnInit(): void {
      this.getAllBatchs();
    }
  
    getAllBatchs() {
      this.service.getAllBatchs().subscribe((res) => {
        this.bList = res;
        this.bTmpList = res;
      });
    }
  
    delete(id: number){
      this.service.getDeleteBatch(id).subscribe((res) => {
       alert('Delete Batch successfully..');
        this.getAllBatchs();
      });
    }

    search(e){
      this.bList = [];
      console.log(e.target.value);
      if(e.target.value) {

       // this.sList =  this.sTmpList.find( ({ data }) => data.student_id ==  e.target.value );
        this.bTmpList.forEach(item => {
          if(item.batch_id.toString().indexOf(e.target.value ) !== -1){
            this.bList.push(item);
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
      this.bList = this.bTmpList;
    }
    }
  
  }
  
