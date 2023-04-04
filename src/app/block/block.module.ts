import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { MaterialModule } from '../material/material.module';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    ButtonsComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ButtonsComponent,
    TableComponent
  ]
})
export class BlockModule { }
