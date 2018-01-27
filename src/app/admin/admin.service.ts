import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { NewsVO } from '../domain/news-vo';

@Injectable()
export class AdminService {
  private SERVER: string;
  private headers: HttpHeaders;
  
  constructor(private http: HttpClient) {
    this.SERVER = `${environment.HOST}`;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  findNews(params: any) {
    return this.http.post(this.SERVER + '/api/newsList', JSON.stringify(params), {headers: this.headers});
  }

  findOneNews(params: number) {
    return this.http.get(this.SERVER + `/api/news?news_id=${params}`);
  }

  addNews(params: NewsVO) {
    return this.http.post(this.SERVER + '/api/news', params,
      { headers: this.headers});
  }
}