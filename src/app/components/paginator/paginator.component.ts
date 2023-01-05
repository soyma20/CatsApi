import {Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {BreedState} from "../../reducers/breed/breed.reducer";
import {SelectLimit} from "../../reducers/breed/breed.selectors";
import {FormControl, FormGroup} from "@angular/forms";
import {BreedChangeLimitAction, BreedSaveAction} from "../../reducers/breed/breed.actions";
import {ImageService} from "../../services/image.service";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  form: FormGroup;
  limits: number[] = [10, 20, 30, 40];
  limit: string;

  constructor(private store$: Store<BreedState>, private imageService: ImageService) {
    store$.pipe(select(SelectLimit)).subscribe(value => this.limit = value)
  }

  ngOnInit(): void {
    this._createForm()
  }


  _createForm(): void {
    this.form = new FormGroup({
      select: new FormControl(10),
    })
  }

  changeLimit() {
    this.store$.dispatch(new BreedChangeLimitAction({limit: this.form.getRawValue().select}))
    this.imageService.getImages().subscribe(value => {
      this.store$.dispatch(new BreedSaveAction({images: value}))
    })
  }
}

