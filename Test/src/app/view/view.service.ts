import {Inject, Injectable, Optional} from '@angular/core';
import {Products} from './products';
import {BehaviorSubject, Subject} from 'rxjs';
import 'rxjs-compat/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(@Optional() @Inject('ProductsData') productsData: Products[]) {
    this.products = productsData;
  }

  products: Products[] = [];

  productsStream: Subject<Products[]> = new BehaviorSubject(this.products);

  getProductsStream = () => {
    this.productsStream.next(this.products);
    return this.productsStream.asObservable();
  };

  search = (query) => {
    const filteredProducts = this.products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    this.productsStream.next(filteredProducts);
  };

  minPrice = (from) => {
    const filtered = this.products.filter(({price}) => price.sort((a, b) => a - b)[0] >= from);
    this.productsStream.next(filtered);
  };
  maxPrice = (to) => {
    const filtered = this.products.filter(({price}) => price.sort((a, b) => a - b)[price.length - 1] <= to);
    this.productsStream.next(filtered);
  };

  resetFilter = () => {
    this.productsStream.next(this.products);
  };
}
