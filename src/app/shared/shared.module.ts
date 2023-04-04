import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './component/snackbar/snackbar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    SnackbarComponent,

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MaterialModule
  ]
})
export class SharedModule { }
