import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  public GET_DATA_COVID_MUERTES(url:string){
    return this.http.get(url);  
  }
}
