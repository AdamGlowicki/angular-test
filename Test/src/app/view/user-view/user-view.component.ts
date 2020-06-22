import {Component, OnInit} from '@angular/core';
import {ViewService} from '../view.service';
import {ToolbarServiceService} from '../tool-bar/toolbar-service.service';

@Component({
  selector: 'app-user-view',
  template: `
    <div class="sub-menu">
      <button mat-icon-button class="menu-button" (click)="menuHandler.setIsOpenMenu()">
        <mat-icon>menu</mat-icon>
      </button>
      <div class="search" *ngIf="isOpen">
        <app-search></app-search>
      </div>
    </div>

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
    .sub-menu {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    .search {
      margin-top: 16px;
    }
    .menu-button {
      align-self: center;
    }

    @media (max-width: 640px) {
      .wrapper {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class UserViewComponent implements OnInit {

  products;
  isOpen: boolean;

  constructor(private viewService: ViewService,
              private menuHandler: ToolbarServiceService) {
    menuHandler.getHandlerMenuStream().subscribe(condition => {
      this.isOpen = condition.isOpenSearch;
    });
  }

  ngOnInit(): void {
    this.products = this.viewService.getProductsStream();
  }
}
