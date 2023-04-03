import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { myData } from 'src/models/myData';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string='https://dummyjson.com/users'
  
  constructor(private http:HttpClient) { }

  getAllData():Observable<myData>{
   return this.http.get(this.baseUrl)
  }
}
