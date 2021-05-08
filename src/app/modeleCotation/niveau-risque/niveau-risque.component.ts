import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModeleService } from 'app/risque/modele.service';
import { modeleCotation } from 'app/risque/modeleCotation';
@Component({
  selector: 'app-niveau-risque',
  templateUrl: './niveau-risque.component.html',
  styleUrls: ['./niveau-risque.component.css']
})
export class NiveauRisqueComponent implements OnInit {
  modele:modeleCotation;
  message:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data1,public dialogRef: MatDialogRef<NiveauRisqueComponent>, private service:ModeleService) { }
  ngOnInit(): void {
    this.modele=this.data1.modele ; 
  }
  modifier(modele:modeleCotation)
   {
    let resp1=this.service.update(1,modele);
    resp1.subscribe((data)=>this.message=data);
   }
}
