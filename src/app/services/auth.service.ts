import {filter} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {User} from '../model/user';
import * as auth0 from 'auth0-js';
import {Router} from '@angular/router';
import {Auth0DecodedHash} from "auth0-js";
import * as moment from "moment/moment";


export const ANONYMOUS_USER: User = {
  id: -1,
  email: ''
};

const AUTH_CONFIG = {
  clientID: 'nu2nqI3iHiKSpq6X898p4sKEbGSTOwEV',
  domain: 'dev-ltc-m7di.us.auth0.com'
};


@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    redirectUri: 'https://localhost:4200'
  });

  private userSubject = new BehaviorSubject<User>(ANONYMOUS_USER);

  user$: Observable<User> = this.userSubject.asObservable().pipe(filter(user => !!user));

  constructor(private http: HttpClient, private router: Router) {

  }

  login() {
    this.auth0.authorize();
  }

  signUp() {

  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  retrieveAuthInfoFromUrl() {
      this.auth0.parseHash((error, result) =>{
        if (error) {
          console.log("could not parse the hash", error);
          return;
        } else if (result && result.idToken) {
          window.location.hash = '';
          console.log("Authentication successfull, authResult: ", result);
          this.setSession(result);
        }
      })

  }
  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(<string>expiration);
    return moment(expiresAt);
  }
  private setSession(result: Auth0DecodedHash | null) {
    const expiresAt = moment().add(result?.expiresIn, 'second');
    localStorage.setItem('id_token', <string>result?.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }
}







