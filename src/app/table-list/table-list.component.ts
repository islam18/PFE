import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { personne_physique } from 'app/client/personne_physique';
import { TokenStorageService } from 'app/securityServices/token-storage.service';
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

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showConseillerBoard=false;
  showChefBoard=false;
  res=false;
  username: string;
  POSTS: any;
  page = 1;
  count = 0;
  tableSize = 3;
  tableSizes = [3, 6, 9, 12];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor( private service:ContactService,private router: Router, private dialog:MatDialog,private tokenStorageService: TokenStorageService) { }

  
  

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showConseillerBoard = this.roles.includes('ROLE_USER');
      this.showChefBoard = this.roles.includes('ROLE_CHEF');
      if( this.showAdminBoard || this.showConseillerBoard || this.showChefBoard ){this.res=true}
      this.username = user.username;
      console.log(this.res);
    }

    this.reloadData();
  
  
  }
  
    reloadData() {
   /*let resp=this.service.getContact();
    resp.subscribe(
      response => {
        this.POSTS = response;
        console.log(response);
      },
      error => {
        console.log(error);
      });*/
      let resp=this.service.getContact();
      resp.subscribe(
        response => {
          this.contact = response;
          console.log(response);
        },
        error => {
          console.log(error);
        });
    }

  /*public findId(){
    let resp= this.service.getPP(this.personne_physique.Code_clt);
    resp.subscribe((data)=>this.personne_physique=data);
   }
*/

onTableDataChange(event){
  this.page = event;
  this.reloadData();
}  

onTableSizeChange(event): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.reloadData();
}
chercher(id : number )
{
 this.router.navigate(['/clientPhysique' , id])

} 

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
   

