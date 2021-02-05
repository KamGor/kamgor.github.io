import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { IHttpService } from '../httpService/IHttpService';
import { IHttpFactoryService } from './IHttpFactoryService';

@Injectable({
  providedIn: 'root'
})
export class HttpFactoryService implements IHttpFactoryService {
  
  getHttpServiceFor(apiUrl: string): IHttpService {
    return new HttpService(apiUrl);
  }

  
}
