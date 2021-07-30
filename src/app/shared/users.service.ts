import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = 'http://localhost:5000/api/Users';
  formData: Users = new Users();
  users: Users[];

  refreshList()
  {
    this.http.get(this.baseUrl).toPromise()
    .then(us=>this.users = us as Users[])
  }

  deleteUserDetails(id: number)
  {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
