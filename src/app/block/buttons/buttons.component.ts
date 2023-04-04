import { Component } from '@angular/core';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  constructor(private service:CommonService){

  }
  success(){
    this.service.openSnackBar('success');
  }
  warning(){
    this.service.openSnackBar('warning');
  }
  fail(){
    this.service.openSnackBar('fail');
  }
  default(){
    this.service.openSnackBar('default');
  }
}
