import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { personne_morale } from 'app/client/personne_morale';
import { PersonneMoraleServiceService } from 'app/service_clients/personne-morale-service.service';

@Component({
  selector: 'app-details-fatca',
  templateUrl: './details-fatca.component.html',
  styleUrls: ['./details-fatca.component.css']
})
export class DetailsFatcaComponent implements OnInit {
  personne_morale: any ; 
  id : number ; 

  constructor(private service : PersonneMoraleServiceService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personne_morale=new personne_morale();
    this.service.getPM(this.id).subscribe(data => {
      console.log(data)
      this.personne_morale = data;
    }, error => console.log(error));
  }

}


  
  
  
 