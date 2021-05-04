import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) {
    
   }

   public getContact()
  {return this.http.get("http://localhost:9090/contact/GetAll")}

  public getRisqueFaiblementEleve()
  {return this.http.get("http://localhost:9090/contact/RisqueFaiblementEleve")}

  public getRisqueMoyennementEleve()
  {return this.http.get("http://localhost:9090/contact/RisqueMoyennementEleve")}

  public getRisqueFaible()
  {return this.http.get("http://localhost:9090/contact/RisqueFaible")}

  public getRisqueEleve()
  {return this.http.get("http://localhost:9090/contact/RisqueEleve")}

  public deleteContact(id:number)
  {return this.http.delete("http://localhost:9090/contact/Delete/"+id,{responseType:'text' as 'json'})
}
public getDossiersRisqueFaible()
{return this.http.get("http://localhost:9090/contact/DossiersRisqueFaible")}

}