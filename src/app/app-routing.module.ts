import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StationsComponent } from './components/stations/stations.component';
import { StationdetailComponent } from './components/stationdetail/stationdetail.component';

const routes: Routes = [
  { path: 'stations', component: StationsComponent },
  { path: 'stationdetail/:id', component: StationdetailComponent },
  { path: '', redirectTo: '/stations', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
