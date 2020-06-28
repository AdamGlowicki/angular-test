import {Inject, Injectable, Optional} from '@angular/core';
import {Products} from './products';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  products: Products[] = [];
  product: Products;

  constructor(@Optional() @Inject('ProductsData') productsData: Products[]) {
    this.products = productsData;
  }

  productsStream: Subject<Products[]> = new BehaviorSubject(this.products);
  productStream: Subject<Products> = new BehaviorSubject(this.product);

  getProducts = () => {
    this.productsStream.next(this.products);
    return this.productsStream.asObservable();
  };

  getProductsById = (productId) => {
    this.product =  this.products.find(({id}) => id === productId);
    this.productStream.next(this.product);
    return this.productStream.asObservable();
  };

  save(product) {
    if (product.id) {
      const index = this.products.findIndex(({id}) => (
        id === product.id
      ));
      this.products.splice(index, 1, product);
    } else {
      product.id = Date.now()
      this.products.push(product);
    }
  }

  delete = (product) => {
    const index = this.products.findIndex(({id}) => (
      id === product.id
    ));
    this.products.splice(index, 1);
  }
}
