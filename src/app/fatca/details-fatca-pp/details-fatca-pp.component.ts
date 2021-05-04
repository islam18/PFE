import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnePhysiqueService } from 'app/service_clients/personne-physique.service';

@Component({
  selector: 'app-details-fatca-pp',
  templateUrl: './details-fatca-pp.component.html',
  styleUrls: ['./details-fatca-pp.component.css']
})
export class DetailsFatcaPPComponent implements OnInit {

  personne_physique: any ; 
  id : number ; 

  constructor(private service : PersonnePhysiqueService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personne_physique=new this.personne_physique();
    this.service.getPP(this.id).subscribe(data => {
      console.log(data)
      this.personne_physique = data;
    }, error => console.log(error));
  }


}
