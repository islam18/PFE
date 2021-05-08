import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ModeleService } from 'app/risque/modele.service';
import { modeleCotation } from 'app/risque/modeleCotation';
import { NiveauRisqueComponent } from '../niveau-risque/niveau-risque.component';
@Component({
  selector: 'app-modele',
  templateUrl: './modele.component.html',
  styleUrls: ['./modele.component.css']
})
export class ModeleComponent implements OnInit {
  displayedColumns: string[] = ['Critere', 'Note'];
  dataSource:MatTableDataSource<modeleCotation>;
  modele:any;
  message:any;
  constructor(private service : ModeleService, private dialog:MatDialog) { }
  ngOnInit(): void {
    /*this.service.get().subscribe 
    ((res)=>{
      console.log(res);
      this.dataSource = new MatTableDataSource(); 
    })*/
    let resp=this.service.getModele(1);
    resp.subscribe((dataSource)=>this.modele=dataSource);
    //let dataSource=this.modele;
  }
   modifier(modele:modeleCotation)
   {
    let resp1=this.service.update(1,modele);
    resp1.subscribe((data)=>this.message=data);
   }
   niveauRisque(modele:modeleCotation) {  
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;   
    dialogConfig.data = { modele };
    dialogConfig.width = "50%";
    this.dialog.open(NiveauRisqueComponent,dialogConfig);
   } 
}
