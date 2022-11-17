import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs';
import {Client} from '../model/client';
import {map} from "rxjs/operators";

@Injectable()
export class ClientsAllService {
  constructor(private http: HttpClient) {
  }

  LoadAllClients() : Observable<Client[]> {
    return this.http.get<any>('/api/allclients').pipe(
      map(res => res.clients)
    )
  }
}
