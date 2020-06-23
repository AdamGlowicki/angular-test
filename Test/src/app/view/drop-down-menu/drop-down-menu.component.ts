import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-drop-down-menu',
  template: `
    <div class="wrapper">
      <ul class="nav flex-column border">
        <li class="nav-item">
          <app-price-selector></app-price-selector>
        </li>
        <li class="nav-item">
          <app-category></app-category>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .wrapper {
      border: 2px solid #ddd;
      box-shadow: 0px 20px 20px -5px;
    }
  `]
})
export class DropDownMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
