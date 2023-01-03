import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IImage} from "../interfaces/IImage";
import {urls} from "../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) {
  }

  getImages():Observable<IImage[]>{
    return this.httpClient.get<IImage[]>(urls.images)
  }
}
