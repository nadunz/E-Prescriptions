import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdAlertBasic } from './service.component';

export const routes: Routes = [
  {
      path: '',
      component: NgbdAlertBasic,
      data: {
        title: 'Alert',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Alert'}]
      }
    
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
   
    NgbdAlertBasic
    
  ]
})

export class ServiceModule {}