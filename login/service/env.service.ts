import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  API_URL = 'http://localhost:9090/';
  API_LIVE_URL = '';

  constructor() { }
}
