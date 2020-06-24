import {Inject, Injectable, Optional} from '@angular/core';
import {Products} from './products';
import {BehaviorSubject, Subject} from 'rxjs';
import 'rxjs-compat/add/observable/of';
import {Category} from './category.enum';

export interface SearchCategory {
  category: Category;
  checked: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(@Optional() @Inject('ProductsData') productsData: Products[]) {
    this.products = productsData;
    this.products.map(value => ({...value, checked: false}));
    this.categories = this.products.map(({category}) => ({category, checked: false}));
    this.recoverProducts = this.products.map(a => Object.assign({}, a));
  }

  products: Products[] = [];
  recoverProducts: Products[] = [];
  categories: SearchCategory[] = [];
  query: string;
  from: number;
  to: number;
  checkedCategoryLength: number;


  productsStream: Subject<Products[]> = new BehaviorSubject(this.products);
  categoryStream: Subject<SearchCategory[]> = new BehaviorSubject(this.categories);

  getProductsStream = () => {
    this.productsStream.next(this.products);
    return this.productsStream.asObservable();
  };

  getCategoriesStream = () => {
    this.categoryStream.next(this.categories);
    return this.categoryStream.asObservable();
  };

  updateCategory = (category: SearchCategory) => {
    const index = this.categories.findIndex(oldValue => oldValue.category === category.category);
    this.categories.splice(index, 1, category);
  };

  updateProducts = () => {
    const checkedCategory = this.categories.filter(({checked}) => checked).map(category => category.category);
    this.checkedCategoryLength = checkedCategory.length;
    const filtered = this.products.filter(({category}) => checkedCategory.includes(category));
    this.productsStream.next(filtered);
  };

  search = (query) => {
    this.query = query;
    const filteredProducts = this.products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    this.productsStream.next(filteredProducts);
  };

  minPrice = (from) => {
    this.from = from;
    const filtered = this.products.filter(({price}) => price.sort((a, b) => a - b)[0] >= from);
    this.productsStream.next(filtered);
  };
  maxPrice = (to) => {
    this.to = to;
    const filtered = this.products.filter(({price}) => price.sort((a, b) => a - b)[price.length - 1] <= to);
    this.productsStream.next(filtered);
  };

  resetFilter = () => {
    this.productsStream.next(this.recoverProducts);
  };
}
