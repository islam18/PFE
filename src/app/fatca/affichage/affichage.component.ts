import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneMoraleServiceService } from 'app/service_clients/personne-morale-service.service';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {
  personne_physique:any;
  personne_morale:any;
 message:any;
  constructor(private service:PersonneMoraleServiceService, private service1:PersonnePhysiqueService  ,private router: Router) { }

  ngOnInit() {
    this.reloadData();}
  
  reloadData() {
    let resp=this.service.getPMFatca();
    resp.subscribe((data)=>this.personne_morale=data);
    let resp1=this.service1.getPPFatca();
    resp1.subscribe((data)=>this.personne_physique=data);
    
  }
  
  details(id: number){
    this.router.navigate(['/detailsFatca', id])
  }

  risque(id : number)
  {  
    this.router.navigate(['/risqueClientMorale',id])
  }
  
  
  
    


   risquePP(id:number)
   {
     this.router.navigate(['/risqueClientPhysique', id])
   }
     
   detailsPP(id: number){
    this.router.navigate(['/details', id])
  }
}


