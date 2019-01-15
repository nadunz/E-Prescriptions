import { Component, OnInit, Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Patient } from 'src/app/models/Patient';
import { NgbdAccordionBasic } from '../patient.component';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor() {}

  @Input() patientViewComp:NgbdAccordionBasic = null; 

  ngOnInit() {
  }

  patient = new Patient(null,null,'Male',null,null);

  onSubmitPatient(formData:NgForm):void{
    console.log(this.patient);
    this.patient = formData.value
    this.patientViewComp.patients.push(this.patient);
  }


}
