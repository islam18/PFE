import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ChoixComponent } from '../choix/choix.component';

@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;   
    dialogConfig.width = "50%";
    dialogConfig.height = "30%";
    this.dialog.open(ChoixComponent,dialogConfig);
  }
   
    
   
}
