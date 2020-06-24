import {Inject, Injectable, Optional} from '@angular/core';
import {Products} from './products';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  products: Products[] = [];

  constructor(@Optional() @Inject('ProductsData') productsData: Products[]) {
    this.products = productsData;
  }

  getProducts = () => {
    return this.products;
  };

  getProductsById = (productId) => {
    return this.products.find(({id}) => id === productId);
  };

  save(product) {
    const index = this.products.findIndex(({id}) => (
      id === product.id
    ));
    this.products.splice(index, 1, product);
  }
}
