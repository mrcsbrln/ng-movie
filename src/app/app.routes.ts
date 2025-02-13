import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { DetailViewComponent } from './pages/detail-view/detail-view.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list/:type', component: ListComponent },
  { path: 'details/:id/:type', component: DetailViewComponent },
];
