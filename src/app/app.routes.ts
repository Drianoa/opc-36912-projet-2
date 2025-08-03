import {Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {GlobalChartComponent} from './global-chart/components/global-chart/global-chart.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'test',
    component: GlobalChartComponent,
  },
  {
    path: '**', // wildcard
    component: NotFoundComponent,
  },
];
