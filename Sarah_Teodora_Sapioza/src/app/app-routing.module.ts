import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/blog/pages/home/home.component';
import {NgModule} from '@angular/core';
import {ConnexionComponent} from './features/blog/pages/connexion/connexion.component';
import {CategorieComponent} from './features/blog/pages/categorie/categorie.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Utilisation directe
  { path: 'login', component: ConnexionComponent},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
