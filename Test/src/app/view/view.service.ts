import {Inject, Injectable, Optional} from '@angular/core';
import {Products} from './products';
import {BehaviorSubject, Subject} from 'rxjs';
import 'rxjs-compat/add/observable/of';
import {Category} from './category.enum';
import {SortOptions} from './sortOptions.enum';

export interface SearchCategory {
  category: Category;
  checked: boolean;
}

export interface PriceRange {
  from: number;
  to: number;
}

export interface SortOptions {
  optionList: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(@Optional() @Inject('ProductsData') productsData: Products[]) {
    this.products = productsData;
    this.products.map(value => ({...value, checked: false}));
    this.categories = this.products.map(({category, id}) => ({id, category, checked: false}));
    this.recoverProducts = this.products.map(a => Object.assign({}, a));
    this.filteredByCategory = productsData;
    this.filteredByPrice = productsData;
    this.priceRange = {from: 0, to: 0};
  }

  products: Products[] = [];
  recoverProducts: Products[] = [];
  categories: SearchCategory[] = [];
  checkedCategories: SearchCategory[] = [];
  filteredByCategory: Products[] = [];
  filteredByPrice: Products[] = [];
  priceRange: PriceRange;
  query: string;
  sortOption: SortOptions;


  productsStream: Subject<Products[]> = new BehaviorSubject(this.products);
  categoryStream: Subject<SearchCategory[]> = new BehaviorSubject(this.categories);
  priceRangeStream: Subject<{}> = new BehaviorSubject(this.priceRange);
  sortOptionStream: Subject<SortOptions> = new BehaviorSubject(this.sortOption);

  getSortOptionStream = () => {
    this.sortOptionStream.next(this.sortOption);
    return this.sortOptionStream.asObservable();
  };


  getSmallestValue = (arr: any[]): number => (
    arr.sort((a, b) => a - b)[0]
  );

  sort = (option) => {
    const filtered = this.getArrayWithSameObject(this.filteredByCategory, this.filteredByPrice);
    switch (option) {
      case SortOptions.asc:
        filtered.sort((a, b) => this.getSmallestValue(a.price) - this.getSmallestValue(b.price));
        break;
      case SortOptions.desc:
        filtered.sort((a, b) => this.getSmallestValue(b.price) - this.getSmallestValue(a.price));
        break;
    }
    return this.productsStream.next(filtered);
  };

  resetSort = () => {
    this.sortOptionStream.next(this.sortOption = undefined);
  };

  getArrayWithSameObject = (arr1: any[], arr2: any[]) => (
    arr1.filter((element) => arr2.find(({id}) => element.id === id))
  );

  getPriceRangeStream = () => {
    this.priceRangeStream.next(this.priceRange);
    return this.priceRangeStream.asObservable();
  };

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
    this.checkedCategories = this.categories.filter(({checked}) => checked);
    this.filteredByCategory = this.getArrayWithSameObject(this.products, this.checkedCategories);
    let filtered = this.getArrayWithSameObject(this.filteredByCategory, this.filteredByPrice);
    if (!this.checkedCategories.length) {
      this.filteredByCategory = this.recoverProducts;
      filtered = this.getArrayWithSameObject(this.recoverProducts, this.filteredByPrice);
    }
    this.productsStream.next(filtered);
    this.resetSort();
  };

  search = (query) => {
    this.query = query;
    const filteredProducts = this.products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    this.productsStream.next(filteredProducts);
  };

  minPrice = (from) => {
    this.priceRange.from = from;
    this.filteredByPrice = this.products.filter(({price}) => this.getSmallestValue(price) >= from);
    const filtered = this.getArrayWithSameObject(this.filteredByCategory, this.filteredByPrice);
    this.productsStream.next(filtered);
    this.resetSort();
  };

  maxPrice = (to) => {
    this.priceRange.to = to;
    this.filteredByPrice = this.products.filter(({price}) => this.getSmallestValue(price) <= to);
    let filtered = this.getArrayWithSameObject(this.filteredByPrice, this.filteredByCategory);
    if (!this.priceRange.to) {
      this.filteredByPrice = this.recoverProducts;
      filtered = this.getArrayWithSameObject(this.recoverProducts, this.filteredByCategory);
    }
    this.productsStream.next(filtered);
    this.resetSort();
  };
}
