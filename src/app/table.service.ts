import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guy } from './guy';
import { Gender } from './gender.enum';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private url: string = 'http://localhost:8778/guy';
  constructor(private httpClient: HttpClient) {}

  getData(aparamsToSearch: string | null): Observable<any[]> {
    const urlWithParams = `${this.url}/find/jdbc?${aparamsToSearch}`;
    return this.httpClient.get<any[]>(urlWithParams);
  }
}
