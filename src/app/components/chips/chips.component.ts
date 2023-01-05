import {Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {BreedState} from "../../reducers/breed/breed.reducer";
import {SelectBreed} from "../../reducers/breed/breed.selectors";

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent {
  public breeds$: Observable<string[]> = this.store$.pipe(select(SelectBreed))

  constructor(private store$: Store<BreedState>) {
  }
}
