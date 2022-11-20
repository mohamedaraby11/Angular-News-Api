import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor( private _http:HttpClient) { }
  // News APi Url
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=eg&apiKey=301d5636f7db4e2f9ec32920ed4f53dd";
  // TechNology Api Url
  techNewsApiUrl = " https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=301d5636f7db4e2f9ec32920ed4f53dd"
  // Bussiness Api Url
  bussinessNewsApi = 'https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=301d5636f7db4e2f9ec32920ed4f53dd'
  topHeading ():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }

  techNews():Observable<any>{
    return this._http.get(this.techNewsApiUrl);
  }
  businessNews():Observable<any>{
    return this._http.get(this.bussinessNewsApi);
  }
}
