import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-view',
  template: `
    <app-drop-down-menu></app-drop-down-menu>
  `,
  styles: []
})
export class AdminViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
