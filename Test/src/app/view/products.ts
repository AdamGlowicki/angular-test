import {Category} from './category.enum';

export interface Products {
  id: number;
  name: string;
  price: number[];
  describe: string;
  category: Category;
  photo: string;
}
