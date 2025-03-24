import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  API = "http://localhost:8080/"

  constructor(private httpClient: HttpClient) {
   }
 
   login(user: User): Observable<User | null>{
    return this.httpClient.post<User>(this.API+"login", user);
   }

   signIn(user:User): Observable<User | null>{
    return this.httpClient.post<User>(this.API+"signIn", user);
   }
   
}
