import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../component/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  arrays!:Array<any>;
  constructor(private snackBar:MatSnackBar) {}

  openSnackBar(type:string){
    this.arrays=[
    {type:'success',msg:'Submitted Successfully',style:'success',icon:'done'},
    {type:'warning',msg:'Warning',style:'warning',icon:'warning'},
    {type:'fail',msg:'Failed to submit',style:'fail',icon:'error'},
    {type:'default',msg:'Default',style:'default',icon:'info'}
  ];
    const group = this.arrays.find(x=>x.type === type);
    this.snackBar.openFromComponent(SnackbarComponent,{
      data:{
        message:group.msg,
        icons:group.icon
      },
      duration:5000,
      panelClass: group.type
    })
  }
}
