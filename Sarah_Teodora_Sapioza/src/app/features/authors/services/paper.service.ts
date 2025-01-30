import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, Observable, of, tap, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaperService {
  private headers: HttpHeaders | { [p: string]: string | string[]; } | undefined;//test

  constructor(private http: HttpClient) {
  }

  //private apiUrl = '/papers'; // Assurez-vous que ce n’est pas déjà en double



  getArticleMetadata(articleId: number): Observable<any> {
    return this.http.get(`/papers/${articleId}`, {
      headers: { 'Content-Type': 'application/json' }
    });
  }


  /*getAllArticles(): Observable<any> {
    return this.http.get(this.apiUrl);
  }*/

  /*getAllArticles(authorId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/papers/${authorId}`);
  }*/

  getAllArticles(authorId: number): Observable<any> {
    return this.http.get(`/papers/${authorId}`);
  }

  //submitArticle(article: any): void {
   // console.log("Préparation de l'envoi du papier :", JSON.stringify(article, null, 2));
   // this.http.post('${this.apiUrl}/papers/submit', article)
    //  .subscribe(response => {console.log(response)});
    /*
    return this.http.post(`${this.apiUrl}/papers/submit`, article, {
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      tap(response => console.log("Réponse reçue du backend :", response)),
      catchError(error => {
        console.error("Erreur lors de l'envoi de la requête :", error);
        return throwError(error);
      })
    );*/

  submitArticle(article: any): Observable<any> {
    console.log(" Envoi de l'article au backend :", article); // DEBUG
    const url = `/papers/submit`;
    console.log(" URL utilisée :", url); // DEBUG

    return this.http.post(url, article, { headers: this.headers }).pipe(
      tap(response => console.log(" Réponse du backend :", response)),
      catchError(error => {
        console.error("Erreur lors de la soumission :", error);
        return throwError(error);
      })
    );
  }

  public postNewPaper(){
    this.http.post('/papers/submit', {"metaData": {
        "title": "Sapioza: Une nouvelle plateforme de publication extatique",
        "authorId": 203,
        "field": "COMPUTER_SCIENCE",
        "publishedIn": "The great Sapioza journal",
        "keywords": "Arbre, Banane, Chat",
        "abstract": "Un très très bel abstract de saison. Un peu plus long pour tester le retour à la ligne qui marche bien entendu n'est ce pas Téodora ?",
        "DOI": "https://sapioza.com/doi/10.1000/182"
      },
      "body": "Ceci est un corps d'article un peu long, mais pas trop non plus. En fait, c'est juste un test pour voir si ça marche. Ceci est un corps d'article un peu long, mais pas trop non plus. En fait, c'est juste un test pour voir si ça marche."
    }).subscribe(response => {console.log(response)})
    console.log("envoyé");

  }

}
