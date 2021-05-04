import { formatDate } from '@angular/common';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { listeSecteur } from 'app/client/listeSecteur';
import { liste_nat } from 'app/client/list_nat';
import { personne_morale } from 'app/client/personne_morale';

import { representant_legal } from 'app/client/representant_legal';
import { justificatif } from 'app/fatca/justificatif';

import { PersonneMoraleServiceService } from 'app/service_clients/personne-morale-service.service';
import { RepresentantLegalService } from 'app/service_clients/representant-legal.service';
import { BeneficiairesEffectifsComponent } from './beneficiaires-effectifs/beneficiaires-effectifs.component';
import { PepPMComponent } from './pep-pm/pep-pm.component';


@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  
  representant_legal:representant_legal=new representant_legal();
  personne_morale:personne_morale=new personne_morale();
  message:any;
  message1:any;
  message2:any;
  liste_nationnalite=liste_nat;
  listeSecteur=listeSecteur;
  selectedFiles : FileList ; 
  creationDate : string ; 
  progress : Number ;
  currentFile : File ; 
  justificatif : justificatif; 
  

  
  constructor(private service:PersonneMoraleServiceService,private snackBar: MatSnackBar, private service1:RepresentantLegalService
  ,private dialog:MatDialog,private router: Router,) { }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
   
  ngOnInit(): void {
   

    
  }

  /**public Risque(code:number)
  {
    //Mise à jour statut Fatca
    let resp2= this.service.updatePM(this.personne_morale.codeClient,this.personne_morale);
    resp2.subscribe((data)=>this.message=data);
  }**/

  public CreateNow(code:number)
  {  let snackBarRef = this.snackBar.open('Client cree!', 'Bravo', {
      duration: 3000
    });
    
    //let resp= this.service.CreatePM(this.personne_morale);
    //resp.subscribe((data)=>this.message=data);
   
   //Mise à jour statut Fatca
     let resp2= this.service.updatePM(this.personne_morale.codeClient,this.personne_morale);
    resp2.subscribe((data)=>this.message=data);   
    

    this.router.navigate(['table-list']);

    }

    selectFile(event:any) {
      this.selectedFiles = event.target.files;
    }
    Add(Form:NgForm)
    {
      this.creationDate=formatDate(new Date(),'mediumDate','en_FR') ;
      this.progress = 0;
      
      if (this.selectedFiles) {
        const file: File | null = this.selectedFiles.item(0);
  
        if (file) {
          this.currentFile = file;
          this.justificatif=new justificatif("","29/04/2021",this.currentFile.type,this.currentFile);
          this.service.AddDocument(this.justificatif,this.currentFile).subscribe(
            (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progress = Math.round(100 * event.loaded / event.total);
              } else if (event instanceof HttpResponse) {
                this.message = event.body.message;
              }
            },
            (err: any) => {
              console.log(err);
              this.progress = 0;
    
              if (err.error && err.error.message) {
                this.message = err.error.message;
              } else {
                this.message = 'Could not upload the file!';
              }
    
              
            });
          }
            this.selectedFiles = undefined; 
      }
    }
   
     

    onClick(p:personne_morale,code1:number,Form:NgForm) {
      this.Add(Form);
      
      //Creation des representants legals
    this.representant_legal.numCin=code1;
    let resp1 = this.service1.CreateRL(this.representant_legal);
    resp1.subscribe((data)=>this.message2=data)

    //Creation personne Morale
    let resp= this.service.CreatePM(this.personne_morale);
    resp.subscribe((data)=>this.message=data);

     //Ajouter le representant
   this.personne_morale.representants.push(this.representant_legal)

  
       const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = {p};
      dialogConfig.width = "60%";
      this.dialog.open(BeneficiairesEffectifsComponent,dialogConfig);
    } 
    
    onClick1(codeClient:number)
    {
      const dialogConfig1 = new MatDialogConfig();
      dialogConfig1.disableClose = true;
      dialogConfig1.autoFocus = true;
      dialogConfig1.width = "50%";
      dialogConfig1.data={codeClient}
      this.dialog.open(PepPMComponent,dialogConfig1);
    }
   

}