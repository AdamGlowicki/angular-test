import {Component, Input, OnInit} from '@angular/core';
import {Products} from '../../products';

@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <div class="view overlay">
        <img class="card-img-top" [src]="product.photo" [alt]="product.name">
        <a>
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>
      <div class="card-body">
        <h4 class="card-title">{{product.name}}</h4>
        <div class="price">
          <span>Cena: </span>
          <div class="price__element" *ngFor="let price of product.price">{{price}}zł</div>
        </div>
        <hr>
        <p class="card-text">{{product.describe}}</p>
        <button mat-raised-button color="primary">
          <mat-icon>shopping_basket</mat-icon>
          Dodaj do koszyka
        </button>
      </div>
    </div>
  `,
  styles: [`
    img {
      max-height: 30vh;
    }

    .price {
      display: flex;
      flex-direction: row;

    }

    .price__element {
      margin-left: 8px;
    }
  `]
})
export class CardComponent implements OnInit {
  @Input('product')
  product: Products;

  constructor() {
  }

  ngOnInit(): void {
  }
}
