import {Component, OnInit} from '@angular/core';
import {ViewService} from '../../view.service';
import {Products} from '../../products';

@Component({
  selector: 'app-card',
  template: `
    <div class="wrapper">
      <mat-card role="group" *ngFor="let product of products" >
        <mat-card-header>
          <div mat-card-avatar></div>
          <mat-card-title>
            Moj kontent
          </mat-card-title>
        </mat-card-header>
        <img [src]="product.photo" [alt]="'Any picture'">
        <mat-card-content>
          <p>any describe</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button></button>
        </mat-card-actions>
      </mat-card>
    </div>

  `,
  styles: [`
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
    @media (max-width: 640px) {
      .wrapper {
        display: grid;
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class CardComponent implements OnInit {
  products: Products[] = [];

  constructor(private service: ViewService) {
  }

  ngOnInit(): void {
    this.products = this.service.getProducts();
  }

}
