import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule], // FormsModule est nécessaire pour ngModel
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
  researchFields = [
    "Informatique", "Mathématiques", "Physique", "Chimie", "Biologie", "Médecine",
    "Économie", "Droit", "Littérature", "Histoire", "Philosophie", "Psychologie",
    "Sociologie", "Sciences Politiques", "Éducation", "Ingénierie", "Art"
  ];

  selectedFields: string[] = [];
  articles = [
    { title: "Introduction à l'IA", field: "Informatique", date: "2024-01-15" },
    { title: "Théories Mathématiques", field: "Mathématiques", date: "2023-10-22" },
    { title: "Physique Quantique", field: "Physique", date: "2024-02-05" },
    { title: "Avancées en Médecine", field: "Médecine", date: "2024-03-12" }
  ];

  // Filtrer les articles en fonction des catégories sélectionnées
  getFilteredArticles() {
    return this.selectedFields.length === 0
      ? this.articles
      : this.articles.filter(article => this.selectedFields.includes(article.field));
  }

  // Trier les articles par ordre chronologique (du plus récent au plus ancien)
  sortByDate() {
    this.articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
}
