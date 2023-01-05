import {Component, OnInit} from '@angular/core';
import {ImageService} from "../../services/image.service";
import {IImage} from "../../interfaces/IImage";
import {BreedSaveAction} from "../../reducers/breed/breed.actions";
import {select, Store} from "@ngrx/store";
import {BreedState} from "../../reducers/breed/breed.reducer";
import {Observable} from "rxjs";
import {SelectBreed, SelectImages, SelectLimit} from "../../reducers/breed/breed.selectors";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  public images$: Observable<IImage[]> = this.store$.pipe(select(SelectImages))

  constructor(private imageService: ImageService, private store$: Store<BreedState>) {
  }

  ngOnInit(): void {
    this.imageService.getImages().subscribe(value => {
      this.store$.dispatch(new BreedSaveAction({images: value}))
    })
  }


}
