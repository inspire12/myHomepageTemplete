/**
 * 백엔드 서버를 설정하는 곳
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {
  public url;
  constructor() {
    this.url = 'http://localhost:5001/v1.0';
  }
}
