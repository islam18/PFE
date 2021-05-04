import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';

@Component({
  selector: 'app-liste-personne-phy',
  templateUrl: './liste-personne-phy.component.html',
  styleUrls: ['./liste-personne-phy.component.css']
})
export class ListePersonnePhyComponent implements OnInit {

  personne_physique:any;
  code:Number;
  
  constructor( private service:PersonnePhysiqueService,private router: Router, private dialog:MatDialog) { }

 
  

  ngOnInit(): void {
    
    this.reloadData();}
  
  reloadData() {
    let resp=this.service.getPPS();
    resp.subscribe((data)=>this.personne_physique=data);
    
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

  public findId(){
    let resp= this.service.getPP(this.personne_physique.Code_clt);
    resp.subscribe((data)=>this.personne_physique=data);
   }

   risque(id:number)
   {
     this.router.navigate(['/risqueClientPhysique', id])
   }
     
   details(id: number){
    this.router.navigate(['/details', id])
  }
  
  AjoutPP(id: number)
  {this.router.navigate(['/Personne/CreatePersonnePhysique'])}
  
  public deletePP(id:number){
    let resp= this.service.deletePP(id);
    resp.subscribe((data)=> {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));}
    
  }

  
   

