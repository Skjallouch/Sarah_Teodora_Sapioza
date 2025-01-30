// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './features/blog/pages/home/home.component';  // Ton composant Home
import { ConnexionComponent } from './features/blog/pages/connexion/connexion.component';  // Ton composant Connexion

// Configuration des routes
export const routes: Routes = [
  { path: '', component: HomeComponent },  // Page d'accueil
  { path: 'login', component: ConnexionComponent },  // Route de la page de connexion
  { path: '**', redirectTo: '' }         // Redirection pour les routes inconnues
];

