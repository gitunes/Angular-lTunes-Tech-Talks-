import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {


  constructor(
    private api: HttpClient
  ) { }
  get baseUrl(): string {
    return environment.apiUrl
  }
  get(endpoint: string, options?: any) {
    
    return this.api.get(`${this.baseUrl}/${endpoint}`, options)
  }
  post(endpoint: string, data: any, options?: any) {
    return this.api.post(`${this.baseUrl}/${endpoint}`, data, options)
  }
  put(endpoint: string, options?: any) {
    return this.api.get(`${this.baseUrl}/${endpoint}`, options)
  }
  delete(endpoint: string, options?: any) {
    return this.api.get(`${this.baseUrl}/${endpoint}`, options)
  }
}
