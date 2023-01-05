import {ActionReducerMap, MetaReducer} from "@ngrx/store";

import {environment} from '../../environments/environment'
import {BreedReducer, breedsNode, BreedState} from "./breed/breed.reducer";

export interface State {
  [breedsNode]: BreedState,
}

export const reducers: ActionReducerMap<State, any> = {
  [breedsNode]: BreedReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
