import {Action} from "@ngrx/store";
import {IImage} from "../../interfaces/IImage";

export enum breedActionsType {
  add = '[BREED] add',
  remove = '[BREED] remove',
  save = '[BREED] save images',
  change = '[BREED] change limit'
}

export class BreedAddAction implements Action {
  readonly type = breedActionsType.add;

  constructor(public payload: { breed: string; }) {
  }
}

export class BreedRemoveAction implements Action {
  readonly type = breedActionsType.remove;

  constructor(public payload: { chip: string; }) {
  }
}

export class BreedSaveAction implements Action {
  readonly type = breedActionsType.save;

  constructor(public payload: { images: IImage[]; }) {
  }
}

export class BreedChangeLimitAction implements Action {
  readonly type = breedActionsType.change;

  constructor(public payload: { limit: string; }) {
  }
}


export type BreedActions = BreedAddAction | BreedRemoveAction | BreedSaveAction | BreedChangeLimitAction;
