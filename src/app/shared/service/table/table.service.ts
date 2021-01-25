import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpClient: HttpClient) { }

  public getTableList(pageNumber: number) {
    return this.httpClient.get<any>(`http://my-json-server.typicode.com/0blank/IremitX-V2/table/${pageNumber}`);
  }
}
