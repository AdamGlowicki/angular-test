import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <mat-card role="group" *ngFor="let i of list">
      <mat-card-header>
        <div mat-card-avatar></div>
        <mat-card-title>
          Moj kontent
        </mat-card-title>
      </mat-card-header>
      <img [src]="''" [alt]="'Any picture'">
      <mat-card-content>
        <p>any describe</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button></button>
      </mat-card-actions>
    </mat-card>

  `,
  styles: []
})
export class CardComponent implements OnInit {
  list = [1, 2, 3];

  constructor() {
  }

  ngOnInit(): void {
  }

}
