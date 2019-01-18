import { Component, OnInit, Input} from '@angular/core';
import { Patient } from 'src/app/models/Patient';

@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent implements OnInit {

  constructor() { }

  @Input() patient:Patient = null; 
  
  ngOnInit() {

  }

}
