import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/blog/pages/home/home.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Utilisation directe
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
