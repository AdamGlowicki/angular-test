import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {ToolbarServiceService} from './toolbar-service.service';

@Component({
  selector: 'app-tool-bar',
  template: `
    <mat-toolbar color="primary">
      <a mat-button class="toolbar-title" routerLink="/">Sklep</a>

        <div class="spacer"></div>

        <a mat-button routerLink='/user'>Użytkownik</a>
        <a mat-button routerLink="/admin">Admin</a>

        <button class="search" mat-mini-fab color="accent" (click)="menuHandler.setIsOpenSearch()">
          <mat-icon>search</mat-icon>
        </button>
    </mat-toolbar>

    <router-outlet></router-outlet>

  `,
  styles: [`
    .toolbar-title {
      margin-left: 48px;

    }
    .spacer {
      flex: 1 1 0%;
    }
    .search {
      margin-top: 56px;
    }
  `]
})
export class ToolBarComponent implements OnInit{

  constructor(public menuHandler: ToolbarServiceService ) {
  }

  ngOnInit(): void {
  }

}
