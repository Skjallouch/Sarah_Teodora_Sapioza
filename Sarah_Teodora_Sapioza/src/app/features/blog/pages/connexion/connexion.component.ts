// src/app/connexion/connexion.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';  // Importation du module FormsModule pour le ngModel

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]  // Inclure FormsModule ici pour utiliser ngModel
})
export class ConnexionComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  connexion() {
    // Logique de connexion
    if (this.email === 'user@example.com' && this.password === 'password123') {
      // Simuler une redirection après une connexion réussie
      this.router.navigate(['/profile']);
    } else {
      this.errorMessage = 'Identifiants incorrects, veuillez réessayer.';
    }
  }
}

