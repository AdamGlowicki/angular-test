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
        <hr>
        <p class="card-text">{{product.describe}}</p>
        <button><mat-icon matTooltip="Dodaj do koszyka.">shopping_basket</mat-icon></button>
      </div>
    </div>
  `,
  styles: [`
    img {
      max-height: 30vh;
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
