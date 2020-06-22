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

        <a mat-button routerLink='/user' (click)="menuHandler.setVisibleSearchIcon()">Użytkownik</a>
        <a mat-button routerLink="/admin" (click)="menuHandler.setInvisibleSearchIcon()">Admin</a>

        <button *ngIf="isVisibleSearchIcon" class="search" mat-mini-fab color="accent" (click)="menuHandler.setIsOpenSearch()">
          <mat-icon>search</mat-icon>
        </button>
    </mat-toolbar>

    <router-outlet></router-outlet>

  `,
  styles: [`
    .spacer {
      flex: 1 1 0%;
    }
    .search {
      margin-top: 56px;
    }
  `]
})
export class ToolBarComponent implements OnInit {

  isVisibleSearchIcon: boolean;

  constructor(public menuHandler: ToolbarServiceService ) {
    this.menuHandler.getHandlerMenuStream().subscribe(view => {
      this.isVisibleSearchIcon = view.isVisibleSearchIcon;
    });
  }

  ngOnInit(): void {
  }

}
