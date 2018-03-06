import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';
const apiUrl = environment.apiUrl;


@Injectable()
export class TripService {
 
  constructor(private httpClient: HttpClient) { }

  createTrip(trip: any) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${apiUrl}/create`, trip, options)
      .toPromise()
  }

  getMyTrips() : Promise<any> {
      const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${apiUrl}/mytrips`, options)
    .toPromise()
    .then((trips: Object[]) => trips);
  }

  getAllTrips() : Promise<any> {

    return this.httpClient.get(`${apiUrl}/trips`)
    .toPromise()
    .then((trips: Object[]) => trips);
  }

  getTrip(id) : Promise<any> {

    return this.httpClient.get(`${apiUrl}/trips/${id}`)
    .toPromise()
    .then((trip: Object) => trip);
  }

  desactivate(id) {
    return this.httpClient.post(`${apiUrl}/desactivate`, {id})
    .toPromise()
  }
}