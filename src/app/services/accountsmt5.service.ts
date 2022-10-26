import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class Accountsmt5Service {

  constructor() { }

  getAccountsmt5() {
    return axios.get('http://localhost:3000/accountsmt5')
  }
}
