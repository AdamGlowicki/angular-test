import {Inject, Injectable, Optional} from '@angular/core';
import {Products} from './products';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  constructor(@Optional() @Inject('ProductsData') productsData: Products[]) {
    this.products = productsData === null ? this.products : productsData;
  }
  products: Products[] = [];

  getProducts = () => (
    this.products
  )

}
