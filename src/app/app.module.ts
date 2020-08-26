import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationsComponent } from './components/stations/stations.component';
import { HttpClientModule } from '@angular/common/http';
import { StationdetailComponent } from './components/stationdetail/stationdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    StationsComponent,
    StationdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
