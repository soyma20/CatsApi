import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";

import {BreedState} from "../../reducers/breed/breed.reducer";
import {BreedRemoveAction} from "../../reducers/breed/breed.actions";

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent {

  @Input()
  chip: string

  constructor(private store$: Store<BreedState>) {
  }

  remove() {
    this.store$.dispatch(new BreedRemoveAction({chip: this.chip}))
  }
}
