import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneMoraleServiceService } from 'app/service_clients/personne-morale-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
 personne_morale:any;
 message:any;
  constructor(private service:PersonneMoraleServiceService,private router: Router) { }

  ngOnInit() {
    this.reloadData();}
  
  reloadData() {
    let resp=this.service.getPMS();
    resp.subscribe((data)=>this.personne_morale=data);
    
  }
  
  details(id: number){
    this.router.navigate(['/detailsClientMorale', id])
  }

  risque(id : number)
  {  
    this.router.navigate(['/risqueClientMorale',id])
  }

  chercher(id : number )
  {
   this.router.navigate(['/clientMoral' , id])

  }  
  
  public deletePP(id:number){
    let resp= this.service.deletePM(id);
    resp.subscribe((data)=> {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error));}

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
}
