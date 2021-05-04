import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { personne_physique } from 'app/client/personne_physique';
import { ContactService } from 'app/service_clients/contact.service';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';
import { data } from 'jquery';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  contact:any;
  code:Number;
  totalRecords:Number=100;
  page:Number=1;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor( private service:ContactService,private router: Router, private dialog:MatDialog) { }

 
  

  ngOnInit(): void {
    
    this.reloadData();}
  
  reloadData() {
    let resp=this.service.getContact();
    resp.subscribe((data)=>this.contact=data);
    
    
    
  }

  /*public findId(){
    let resp= this.service.getPP(this.personne_physique.Code_clt);
    resp.subscribe((data)=>this.personne_physique=data);
   }
*/
   clientsMorales()
   {
     this.router.navigate(['/clientsMorales'])
   }
     
   clientsPhysiques(){
    this.router.navigate(['/clientsPhysiques'])
  }

  AjoutclientMorale()
   {
     this.router.navigate(['/typography'])
   }
     
   AjoutclientPhysique(){
    this.router.navigate(['/user-profile'])
  }
  
  
  
  public deletePP(id:number){
    let resp= this.service.deleteContact(id);
    resp.subscribe((data)=> {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));}
    
  }
   

