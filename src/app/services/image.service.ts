import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";

import {IImage} from "../interfaces/IImage";
import {urls} from "../constants/urls";
import {BreedState} from "../reducers/breed/breed.reducer";
import {SelectBreed, SelectLimit} from "../reducers/breed/breed.selectors";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  limit: string;
  breedCollection: string = '';


  constructor(private httpClient: HttpClient, private store$: Store<BreedState>) {
    store$.pipe(select(SelectBreed)).subscribe(value => {
      for (const breed of value) {
        if (this.breedCollection !== '') {
          this.breedCollection = this.breedCollection + ',' + breed;
        } else {
          this.breedCollection = breed;
        }
      }
    })
    store$.pipe(select(SelectLimit)).subscribe(value => this.limit = value)
  }

  getImages(): Observable<IImage[]> {
    return this.httpClient.get<IImage[]>(urls.images + "&limit=" + this.limit + "&breed_ids=" + this.breedCollection)
  }


}
