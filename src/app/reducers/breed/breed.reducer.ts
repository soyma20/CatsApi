import {BreedActions, breedActionsType} from "./breed.actions";
import {IImage} from "../../interfaces/IImage";

export const breedsNode = 'breeds'

export interface BreedState {
  breeds: string[];
  images: IImage[];
  limit: string;
}

const initialState: BreedState = {
  breeds: [],
  images: [],
  limit: '10',
};


export const BreedReducer = (state: BreedState = initialState, action: BreedActions): BreedState => {

  if (action.type === breedActionsType.add) {
    return {
      ...state,
      breeds: [...state.breeds, action.payload.breed]
    }
  }
  if (action.type === breedActionsType.remove) {
    const breeds = [...state.breeds];
    const index = breeds.indexOf(action.payload.chip);
    breeds.splice(index, 1);
    return {
      ...state,
      breeds
    };
  }
  if (action.type === breedActionsType.save) {
    return {
      ...state,
      images: action.payload.images
    };
  }
  if (action.type === breedActionsType.change) {
    return {
      ...state,
      limit: action.payload.limit
    };
  }

  return state
}
