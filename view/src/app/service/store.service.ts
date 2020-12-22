import { TokenStorageService } from './token-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const AUTH_API = 'http://localhost:8080/store/';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  add(storename: string, category: string, latitude: number, longitude: number): Observable<any> {
    var username = this.tokenStorageService.getUser()["username"];
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(AUTH_API + 'add', {
      username,
      storename, category, latitude, longitude
    }, httpOptions);
  }

  deleteStore(id : string): Observable<any> {
    console.log("dd"+id)
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params:{
        storeId:id
      }
    };
    return this.http.delete(AUTH_API + 'delStore', httpOptions);
  }

  getStore(): Observable<any> {
    var username = this.tokenStorageService.getUser()["username"];
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params:{
        'user':username
      }
    };
    return this.http.get(AUTH_API + 'fetch', httpOptions);
  }
}
