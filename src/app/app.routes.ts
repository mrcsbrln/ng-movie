import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { DetailViewComponent } from './pages/detail-view/detail-view.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'details/:id', component: DetailViewComponent },
];
