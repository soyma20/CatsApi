import {Component} from '@angular/core';
import {select, Store} from "@ngrx/store";

import {ImageService} from "../../services/image.service";
import {BreedState} from "../../reducers/breed/breed.reducer";
import {SelectBreed} from "../../reducers/breed/breed.selectors";
import {BreedSaveAction} from "../../reducers/breed/breed.actions";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  search: string = '';
  breed: string[];

  constructor(private imageService: ImageService, private store$: Store<BreedState>) {
    store$.pipe(select(SelectBreed)).subscribe(value => this.breed = value)
  }

  catchInputEmit(search: string) {
    this.search = search
  }

  findImagesByBreed() {
    if (this.breed.length !== 0) {
      this.imageService.getImages().subscribe(value => {
        this.store$.dispatch(new BreedSaveAction({images: value}))
      })
    }
  }
}
