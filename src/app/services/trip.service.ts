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
  }

  getAllTrips() : Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${apiUrl}/trips`, options)
    .toPromise()
  }

  getTrip(id) : Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${apiUrl}/trips/${id}`, options)
    .toPromise()
  }

  editTrip(trip) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${apiUrl}/mytrips/edit/${trip._id}`, trip, options)
    .toPromise()
  }

  desactivate(id) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${apiUrl}/desactivate`, {id}, options)
    .toPromise()
  }
}