import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'app/service_clients/contact.service';
import { PersonneMoraleServiceService } from 'app/service_clients/personne-morale-service.service';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  personnePhysique:any;
  personneMorale:any;
  constructor(private service:PersonneMoraleServiceService , private service1:PersonnePhysiqueService, private router: Router) { }

  
  ngOnInit(): void {
    
    this.reloadData();}
  
  reloadData() {
    let resp=this.service.getDossiersRisqueFaible();
    resp.subscribe((data)=>this.personneMorale=data);
    let resp1=this.service1.getDossiersRisqueFaible();
    resp1.subscribe((data)=>this.personnePhysique=data);
    
    
  }

  traiter(id :number)
  {
     this.router.navigate(['/ouvertureCompte',id])
   
  }
}
