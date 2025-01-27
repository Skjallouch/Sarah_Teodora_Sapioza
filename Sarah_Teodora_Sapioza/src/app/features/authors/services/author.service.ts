import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Author {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private apiUrl = 'https://api.example.com/authors';

  constructor(private http: HttpClient) {}

  // Récupérer tous les auteurs
  getAll(): Observable<Author[]> {
    return this.http.get<Author[]>(this.apiUrl);
  }
}
