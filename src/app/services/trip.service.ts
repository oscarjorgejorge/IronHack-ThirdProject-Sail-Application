import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';
const apiUrl = environment.apiUrl + '/trip';


@Injectable()
export class TripService {

  constructor(private httpClient: HttpClient) { }




  createTrip(trip: any) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${apiUrl}/create`, trip, options)
      // .toPromise()
      // .then((data) => this.setUser(data));
  }
}
