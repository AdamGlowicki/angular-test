import {Category} from './category.enum';

export interface Products {
  id: number;
  name: string;
  price: number;
  price2?: number;
  price3?: number;
  describe: string;
  category: Category;
  photo: string;
}
