import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  template: `
    <mat-toolbar class="menu">
      <div class="menu__title">
        <button mat-flat-button href="/" >Sklep</button>
      </div>
      <div class="menu__links">
        <a mat-button  routerLink='/user' >Użytkownik</a>
        <a mat-button routerLink="/admin">
          <mat-icon matTooltip="Admin">menu</mat-icon>
        </a>
      </div>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
  .menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  `]
})
export class ToolBarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
