import { Component, OnInit } from '@angular/core';
import { PaperService } from '../../../authors/services/paper.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, FormsModule]
})
export class HomeComponent implements OnInit {
  showForm = false;
  newArticle: any = {};
  articles: any[] = [];

  constructor(private paperService: PaperService) {
  }

  ngOnInit() {
    //  Initialisation pour éviter les erreurs `undefined`
    this.newArticle = {
      title: '',
      publishedIn: '',
      authorId: null, // Assurez-vous qu'il est bien un `number`
      field: '',
      keywords: '',
      abstract: '',
      DOI: '',
    };
    this.articles = [];

    console.log(" HomeComponent initialisé");
    this.loadArticles();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  /*publishArticle() {
    console.log(" Tentative de publication d'un article...");

    // Vérification des valeurs avant soumission
    console.log(" Données envoyées au backend :", JSON.stringify(this.newArticle, null, 2));

    // Vérifier si un champ est vide et LOGUER lequel manque
    if (!this.newArticle.title) console.warn("Titre manquant !");
    if (!this.newArticle.authorId) console.warn(" ID de l'auteur manquant !");
    if (!this.newArticle.field) console.warn(" Domaine manquant !");
    if (!this.newArticle.publishedIn) console.warn(" Journal manquant !");
    if (!this.newArticle.keywords) console.warn(" Mots-clés manquants !");
    if (!this.newArticle.abstract) console.warn(" Résumé manquant !");
    if (!this.newArticle.DOI) console.warn(" DOI manquant !");

    // Vérification des types
    console.log(" Type de authorId :", typeof this.newArticle.authorId);
    console.log(" Type de title :", typeof this.newArticle.title);

    this.paperService.submitArticle(this.newArticle)
  }




  loadArticleMetadata(articleId: number) {
    console.log("Tentative de récupération des métadonnées pour l'article ID :", articleId);

    this.paperService.getArticleMetadata(articleId).subscribe({
      next: (data) => {
        console.log('Métadonnées reçues :', data);
        this.articles = [data]; // Vérifier si c'est bien un tableau
      },
      error: (error) => {
        console.error("Erreur lors du chargement des métadonnées :", error);

        if (error.status === 404) {
          console.error("ERREUR 404 : Impossible de trouver les métadonnées pour cet ID.");
        }
      }
    });
  }







  resetForm() {
    this.newArticle = {
      title: '',
      publishedIn: '',
      authorId: null,
      field: '',
      keywords: '',
      abstract: '',
      DOI: '',
    };
    this.showForm = false;
  }




   */

  trackById(index: number, article: any): number {
    return article.id;
  }

  loadArticles() {

    const articleId = Number(this.newArticle.authorId);
    this.paperService.getArticleMetadata(articleId).subscribe({
      next: (data) => {
        console.log('Métadonnées récupérées:', data);
        this.articles = [data]; // Assurez-vous que `articles` est bien un tableau
      },
      error: (error) => {
        console.error('Erreur lors du chargement des métadonnées:', error);
      }
    });
  }

  publishArticle() {
    console.log(" Tentative de publication d'un article...");
    console.log(" Données envoyées au backend :", this.newArticle);

    /*this.paperService.submitArticle(this.newArticle).subscribe({
      next: (response) => {
        console.log(" Article publié avec succès :", response);
        this.loadArticles(); // Recharge les articles
        this.newArticle = {title: '', publishedIn: '', authorId: '', field: '', keywords: '', abstract: '', DOI: ''};
        this.showForm = false;
      },
      error: (error) => {
        console.error(" Erreur lors de la publication :", error);
      }
    });*/
    this.paperService.postNewPaper();
  }


}
