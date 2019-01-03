import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdAccordionBasic } from './patient.component';

export const routes: Routes = [
  {
    
      path: '',
      component: NgbdAccordionBasic,
      data: {
        title: 'Patient',
        urls: [{title: 'Dashboard',url: '/dashboard'},{title: 'ngComponent'},{title: 'Accordion'}]
      }
    }
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgbModule
  ],
  declarations: [
    NgbdAccordionBasic
  ]
})

export class PatientModule {}