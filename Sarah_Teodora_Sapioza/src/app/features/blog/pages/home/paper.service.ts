import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SendPaper } from '../../../../send-paper';

@Injectable({
  providedIn: 'root'
})

export class PaperService {

  constructor(private http: HttpClient) {}

  private apiUrl = 'http://51.178.59.232:8082/papers/submit';


  //private apiUrl = '/papers/submit'; // Utilisation du proxy

  public postNewPaper(paper: SendPaper): Observable<any> {
    console.log(" Envoi de l'article au backend :", paper);
    return this.http.post(this.apiUrl, paper);
  }

}



/*public postNewPapers(paper: SendPaper): Observable<any> {
  return this.http.post<any>(this.apiUrl, paper);
}*/
