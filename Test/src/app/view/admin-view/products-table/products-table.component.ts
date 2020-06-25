import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from '../../admin-service.service';
import {Products} from '../../products';

@Component({
  selector: 'app-products-table',
  template: `
    <table class="table">
      <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Nazwa</th>
        <th scope="col">Cena</th>
        <th scope="col">Kategoria</th>
        <th scope="col">Zdjęcie</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let product of products"
          [routerLink]="product.id">
        <th scope="row">{{product.id}}</th>
        <td>{{product.name}}</td>
        <td><span class="ml-2" *ngFor="let price of product.price">{{price}}</span></td>
        <td>{{product.category}}</td>
        <td><img [src]="product.photo"></td>
      </tr>
      </tbody>
    </table>
    <button mat-button routerLink="add">Dodaj nowy</button>

  `,
  styles: [`
    td {
      font-size: 12px;
    }

    img {
      width: 16px;
      height: 16px;
    }
  `]
})
export class ProductsTableComponent implements OnInit {

  products: Products[] = [];

  constructor(private adminService: AdminServiceService) {
    this.products = this.adminService.getProducts();
  }

  ngOnInit(): void {
  }

}
