import { Injectable } from '@angular/core';
import { RequestOptions, Http, Response } from "@angular/http";
import { Observable } from 'rxjs';
import { HttpConfig } from 'src/app/util/HttpConfig';

@Injectable({
  providedIn: 'root'
})
export class ShowAlertService {
  private options: RequestOptions;
  private url: string;
  
  constructor(private http: Http, private httpConfig : HttpConfig) { }

  getAllAlerts() : Observable<Response>{
    this.options = this.httpConfig.getOptions();
    this.url = this.httpConfig.getUrl("getAllAlerts");
    return this.http.post(this.url, this.options);
  }
}
