import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IUser {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseURI: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseURI}users`);
  }

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseURI}/users`, user);
  }

  deleteUser(user: IUser): Observable<IUser> {
    return this.http.delete<IUser>(`${this.baseURI}/users/${user.id}`);
  }

  editUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.baseURI}/users/${user.id}`, user);
  }
}
