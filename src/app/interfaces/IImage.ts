import {ICategory} from "./ICategory";
import {IBreed} from "./IBreed";

export interface IImage  {
  breeds: IBreed[];
  categories: ICategory[];
  id: string;
  url: string;
  width: number;
  height: number;
}
