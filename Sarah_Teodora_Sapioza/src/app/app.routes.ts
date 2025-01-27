//import { Routes } from '@angular/router';

//export const routes: Routes = [];
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importez ici
import { AppComponent } from './app.component';
import { HomeComponent } from './features/blog/pages/home/home.component'; // Importez vos composants ici

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Page d'accueil
  { path: '**', redirectTo: '' } // Redirection pour les routes inconnues
];
