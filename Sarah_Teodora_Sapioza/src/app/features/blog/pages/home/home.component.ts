/*import { Component, OnInit } from '@angular/core';
import { PaperService } from '../../../authors/services/paper.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {SendPaper} from '../../../../send-paper';

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

  constructor(private paperService: PaperService) {}

  toggleForm() {
    this.showForm = !this.showForm;
  }

  trackById(index: number, article: any): number {
    return article.id;
  }

  ngOnInit() {}

  publishArticle() {
    console.log("Tentative de publication d'un article...");

    if (!this.newArticle.title || !this.newArticle.authorId) {
      alert("Veuillez remplir tous les champs obligatoires !");
      return;
    }
    console.log("Données envoyées au backend :", this.newArticle);

    this.paperService.submitArticle(this.newArticle);
  }

  submitArticle() {
    this.paperService.postNewPaper();
  }
}

*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //  Importation correcte
import { SendPaper } from '../../../../send-paper';
import { PaperService } from './paper.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [FormsModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newArticle: SendPaper = {
    metaData: {
      title: '',
      authorId: 0,
      field: '',
      publishedIn: '',
      keywords: '',
      abstract_: '',
      DOI: ''
    },
    body: ''
  };

  constructor(private paperService: PaperService, private router: Router) {}

  ngOnInit(): void {}

  /**
   * Fonction qui envoie un nouvel article au backend via PaperService.
   */
  publishArticle(): void {
    console.log("📝 Tentative de publication :", this.newArticle);

    // Vérification des champs obligatoires
    if (!this.newArticle.metaData.title || !this.newArticle.metaData.authorId) {
      alert("⚠️ Veuillez remplir tous les champs obligatoires !");
      return;
    }

    // Nettoyage des données pour éviter les espaces vides
    const paperCreationDto: SendPaper = {
      metaData: {
        title: this.newArticle.metaData.title.trim(),
        authorId: this.newArticle.metaData.authorId,
        field: this.newArticle.metaData.field.trim(),
        publishedIn: this.newArticle.metaData.publishedIn.trim(),
        keywords: this.newArticle.metaData.keywords.trim(),
        abstract_: this.newArticle.metaData.abstract_.trim(),
        DOI: this.newArticle.metaData.DOI.trim(),
      },
      body: this.newArticle.body.trim()
    };

    console.log("📤 Envoi des données vers /papers/submit :", paperCreationDto);

    // Envoi de l'article via PaperService
    this.paperService.postNewPaper(paperCreationDto).subscribe({
      next: (response) => {
        console.log("✅ Article publié avec succès :", response);
        alert("🎉 Votre article a bien été publié !");

        // Vérification de la présence d'un identifiant valide dans la réponse
        if (response?.id) {  // Remplace "id" si ton backend utilise un autre nom
          console.log("🔄 Redirection vers l'article :", '/article/' + response.id);
          this.router.navigate(['/article/' + response.id]);
        } else {
          console.warn("⚠️ Aucun identifiant reçu dans la réponse, pas de redirection !");
        }

        this.resetForm();
      },
      error: (error) => {
        console.error("❌ Erreur lors de la soumission :", error);
        alert("⛔ Une erreur est survenue lors de la soumission !");
      }
    });
  }




  resetForm(): void {
    this.newArticle = {
      metaData: {
        title: '',
        authorId: 0,
        field: '',
        publishedIn: '',
        keywords: '',
        abstract_: '',
        DOI: '',
      },
      body: ''
    };
  }
}


// todo remplacer any par SendPaper Interface
