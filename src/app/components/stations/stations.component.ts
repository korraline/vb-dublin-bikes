import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/models/bikes';
import { StationsService } from 'src/app/services/stations.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {

  stations: Station[] = [];
  availableBikes: number = 0;
  nameFilter: string = '';
  onlyAvailable: boolean = false;

  constructor(private stationsService: StationsService) { }

  ngOnInit(): void {
    this.getStations();
  }

  getStations() {
    this.stationsService.getStationsInService().subscribe(stations => {
      const gottenStations = [];
      const keys = ['number', 'contract_name', 'name', 'address', 'bike_stands', 'available_bike_stands', 'available_bikes', 'status', 'last_update'
      ];
      stations.forEach(station => {
        const stationItem: any = {};
        const importedStation: any = station;
        keys.forEach(key => {
          stationItem[key] = station[key];
          this.availableBikes += station.available_bikes;
        });
        gottenStations.push(stationItem);
      })
      this.stations = gottenStations;
    });
  }

  refresh() {
    this.nameFilter = '';
    this.onlyAvailable = false;
    this.getStations();
  }

  filterStations() {
    if (this.nameFilter !== '') {
      return this.stations.filter(station => station.name.includes(this.nameFilter));
    }
    if (this.onlyAvailable) {
      return this.stations.filter(station => station.status === 'OPEN' && station.available_bikes > 0);
    }
    return this.stations;
  }

  formatDate(time: any) {
    return new Date(time).toString().slice(0, 24);
  }

  clearFilter() {
    this.nameFilter = '';
    this.onlyAvailable = false;
  }

  getAvailable() {
    this.nameFilter = '';
    this.onlyAvailable = !this.onlyAvailable;
  }
}
