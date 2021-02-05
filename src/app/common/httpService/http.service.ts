import { Injectable } from '@angular/core';
import { IHttpService } from './IHttpService';
import axios, { AxiosInstance } from 'axios';
import { IHttpRequestOptions } from './IHttpRequestOptions';

export class HttpService implements IHttpService {

  private _axiosInstance: AxiosInstance;

  constructor(
    private apiUrl: string,
  ) {
    this._axiosInstance = axios.create({
      baseURL: this.apiUrl,
    });
  }

  public async get(path: string, options: IHttpRequestOptions): Promise<any> {
    const response = await this._axiosInstance.get(path, options)
    return response.data;
  }

}
