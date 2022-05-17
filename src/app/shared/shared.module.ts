import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  /* Inicio de Exportación de component  */
  exports: [
    SidebarComponent
  ],
  /* Fin de Exportación de component  */
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
