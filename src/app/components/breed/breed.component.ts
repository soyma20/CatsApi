import {select, Store} from "@ngrx/store";
import {Component, DoCheck, Input} from '@angular/core';
import {Observable} from "rxjs";

import {IBreed} from "../../interfaces/IBreed";
import {BreedState} from "../../reducers/breed/breed.reducer";
import {SelectBreed} from "../../reducers/breed/breed.selectors";
import {BreedAddAction} from "../../reducers/breed/breed.actions";

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements DoCheck{

  public breeds$: Observable<string[]> = this.store$.pipe(select(SelectBreed))
  disabled: boolean = false;

  @Input()
  breed: IBreed;

  constructor(private store$: Store<BreedState>) {
  }

  ngDoCheck(): void {
    this.breeds$.subscribe(value => {
      this.disabled =  value.some(value1 => value1 ===this.breed.id);
    })
  }

  addBreed() {
    this.store$.dispatch(new BreedAddAction({breed: this.breed.id}))
    this.disabled = true
  }

}
