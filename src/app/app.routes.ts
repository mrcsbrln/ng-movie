import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { DetailViewComponent } from './pages/detail-view/detail-view.component';
import { GenresComponent } from './pages/genres/genres.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { PrivatePolicyComponent } from './pages/private-policy/private-policy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list/:type', component: ListComponent },
  { path: 'details/:id/:type', component: DetailViewComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'genres/:genreId', component: GenresComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy-policy', component: PrivatePolicyComponent },
];
