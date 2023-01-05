import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IBreed} from "../interfaces/IBreed";
import {urls} from "../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class BreedService {

  constructor(private httpClient: HttpClient) {}

  getAllBreads(): Observable<IBreed[]> {
    return this.httpClient.get<IBreed[]>(urls.breeds)
  }
}
