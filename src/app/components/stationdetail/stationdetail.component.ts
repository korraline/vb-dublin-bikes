import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StationsService } from 'src/app/services/stations.service';
import { Bikes } from 'src/app/models/bikes';
import { getLocaleCurrencyCode } from '@angular/common';

@Component({
  selector: 'app-stationdetail',
  templateUrl: './stationdetail.component.html',
  styleUrls: ['./stationdetail.component.scss']
})
export class StationdetailComponent implements OnInit {
  stationId = 0;
  station: Bikes;
  constructor(private route: ActivatedRoute, private stationsService: StationsService) { }

  ngOnInit(): void {
    this.getStation();
  }

  getStation() {
    const stationId = +this.route.snapshot.paramMap.get('id');
    this.stationsService.getStationsInService().subscribe(stations => {
      const importedStation: any = stations.find(station => station.number == stationId);
      const keys = ['number', 'contract_name', 'name', 'address', 'bike_stands', 'available_bike_stands', 'available_bikes', 'status', 'last_update'
      ];
      const stationItem: any = {};
      keys.forEach(key => {
        stationItem[key] = importedStation[key];
        stationItem.lat = importedStation.position.lat;
        stationItem.lng = importedStation.position.lng;
      });
      this.station = stationItem;
    })
  }

}
