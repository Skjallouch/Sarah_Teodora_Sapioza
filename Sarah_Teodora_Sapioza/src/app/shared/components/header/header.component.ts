import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  userId: number | null = null;
  notificationsCount: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Simulation de l'état de connexion et des notifications
    this.isLoggedIn = !!localStorage.getItem('user');
    this.userId = this.isLoggedIn ? JSON.parse(localStorage.getItem('user')!).id : null;

    // Simulation de notifications (tu peux remplacer ça par un appel API)
    this.notificationsCount = Math.floor(Math.random() * 10); // Exemple : 0 à 9 notifications
  }

  logout(): void {
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}

