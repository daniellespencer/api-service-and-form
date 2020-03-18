import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'eceeed1f3f0844dc824392d5c3ed5d9d';
  
  constructor(private httpClient: HttpClient) { }

  public getNews(){

    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);

  };
}
