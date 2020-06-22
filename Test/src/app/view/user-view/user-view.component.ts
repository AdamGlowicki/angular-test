import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-view',
  template: `
    <app-search></app-search>
    <mat-card>
      <app-card></app-card>
    </mat-card>
  `,
  styles: []
})
export class UserViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
