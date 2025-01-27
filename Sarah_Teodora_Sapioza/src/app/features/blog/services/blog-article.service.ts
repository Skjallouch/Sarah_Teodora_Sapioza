import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogArticle } from '../models/blog-article.model';

@Injectable({
  providedIn: 'root',
})
export class BlogArticleService {
  private apiUrl = 'https://api.example.com/blog-articles';

  constructor(private http: HttpClient) {}

  // Récupérer tous les articles
  getAll(): Observable<BlogArticle[]> {
    return this.http.get<BlogArticle[]>(this.apiUrl);
  }

  // Récupérer un article par ID
  getById(id: number): Observable<BlogArticle> {
    return this.http.get<BlogArticle>(`${this.apiUrl}/${id}`);
  }

  // Publier un nouvel article
  create(article: BlogArticle): Observable<BlogArticle> {
    return this.http.post<BlogArticle>(this.apiUrl, article);
  }

  // Mettre à jour un article
  update(id: number, article: BlogArticle): Observable<BlogArticle> {
    return this.http.put<BlogArticle>(`${this.apiUrl}/${id}`, article);
  }

  // Supprimer un article
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
