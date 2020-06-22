import {Component, OnInit} from '@angular/core';
import {ViewService} from '../view.service';
import {Products} from '../products';

@Component({
  selector: 'app-user-view',
  template: `
    <app-search></app-search>
    <div class="wrapper">
      <app-card [product]="product" *ngFor="let product of products | async"></app-card>
    </div>
  `,
  styles: [`
    .wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }

    @media (max-width: 640px) {
      app-card {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class UserViewComponent implements OnInit {

  products;

  constructor(private viewService: ViewService) {
  }

  ngOnInit(): void {
    this.products = this.viewService.getProductsStream();
  }
}
