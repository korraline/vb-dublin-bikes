import { Injectable } from '@angular/core';
import { Station } from '../models/bikes';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StationsService {
  private stationsUrl = 'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=792046687bf105ffdd6075203c337a6ae32da7d5';
  constructor(private http: HttpClient) { }

  getStationsInService(): Observable<Station[]> {
    return this.http.get<Station[]>(this.stationsUrl)
  }
}



