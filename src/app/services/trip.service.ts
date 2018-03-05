import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class TripService {
  private API_URL = 'http://localhost:3000/auth';

  constructor(private httpClient: HttpClient) { }

}
