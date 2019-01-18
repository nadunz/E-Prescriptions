import {Component, OnInit} from '@angular/core';
import {Patient} from "../../models/Patient";
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
	selector: 'ngbd-accordion-basic',
  templateUrl: 'patient.component.html',
  styleUrls: ['./patient.component.css']
})

export class NgbdAccordionBasic implements OnInit{
  
  patients:Array<Patient> = [];
  selectedPatient: Patient = null; // default is null
  selectedNic:string = null; 
  addpatient:boolean = false;
  
  ngOnInit(): void {
    // seeding initial data
      this.patients.push(
        new Patient('Nadun','940272645V','Male','December 13, 2018','nadunp94@gmail.com','0770443148'),
        new Patient('Kasuni','940272545V','Female','December 25, 2018',null,'0710553148'),
        new Patient('Kumara','940252645V','Male','December 13, 2018',null,'0780443148'),
        new Patient('Chamari','940275645V','Female','January 7, 2019',null,'0770111148')
      );
  }
  
  onClickSelectPatient(patient):void{
    this.selectedPatient = patient;
    this.selectedNic = patient.nic
    this.addpatient = false;
  }

  clearSelectedPatient():void{
    this.selectedPatient = null;
    this.selectedNic = null;
    this.addpatient = true;
  }

}
