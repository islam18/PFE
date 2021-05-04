import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { compteEpargne } from 'app/compte/compteEpargne';

@Injectable({
  providedIn: 'root'
})
export class CompteEpargneService {

  constructor(private http:HttpClient) { }

  
  public CreatePM(c :compteEpargne, id:number)
  { return this.http.post("http://localhost:9090/compteEpargne/CreateCompteClientMoral/"+id,c,{responseType:'text' as 'json'})}
  

  public CreatePP(c :compteEpargne, id:number)
  { return this.http.post("http://localhost:9090/compteEpargne/CreateCompteClientPhysique/"+id,c,{responseType:'text' as 'json'})}

}
