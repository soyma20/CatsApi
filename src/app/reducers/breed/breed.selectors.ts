import {createFeatureSelector, createSelector} from "@ngrx/store";
import {breedsNode, BreedState} from "./breed.reducer";
import {IImage} from "../../interfaces/IImage";

export const SelectBreedFeature = createFeatureSelector<BreedState>(breedsNode)

export const SelectBreed = createSelector(
  SelectBreedFeature,
  (state: BreedState): string[] => state.breeds
)
export const SelectImages = createSelector(
  SelectBreedFeature,
  (state: BreedState): IImage[] => state.images
)
export const SelectLimit = createSelector(
  SelectBreedFeature,
  (state: BreedState): string => state.limit
)
