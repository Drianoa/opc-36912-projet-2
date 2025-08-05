import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { CountryDetailComponent } from './pages/contry-detail/country-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'country/:countryId',
    component: CountryDetailComponent,

  },
  {
    path: '**', // wildcard
    component: NotFoundComponent,
  },
];
