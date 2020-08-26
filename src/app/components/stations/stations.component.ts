import { Component, OnInit } from '@angular/core';
import { Bikes } from 'src/app/models/bikes';
import { StationsService } from 'src/app/services/stations.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss']
})
export class StationsComponent implements OnInit {

  stations: Bikes[] = [];
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
          stationItem.lat = importedStation.position.lat;
          stationItem.lng = importedStation.position.lng;
        });
        gottenStations.push(stationItem);
      })
      this.stations = gottenStations;
    });
  }

  formatDate(time: any) {
    return new Date(time).toString().slice(0, 24);
  }

}
