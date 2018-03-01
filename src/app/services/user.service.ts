import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class UserService {
  private user: any;

  private API_URL = 'http://localhost:3000/user';

  constructor(private httpClient: HttpClient) { }

  edit(user: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/edit`, user, options)
      .toPromise()
  }
}
