import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-view',
  template: `
    <div class="wrapper mt-4">
      <div>
        <router-outlet></router-outlet>
      </div>
      <app-products-table></app-products-table>
    </div>
  `,
  styles: [`
    .wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  `]
})
export class AdminViewComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
