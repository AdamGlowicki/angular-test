import {Component, OnInit} from '@angular/core';
import {ToolbarServiceService} from './toolbar-service.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-tool-bar',
  template: `
    <mat-toolbar color="primary">
      <a mat-button class="toolbar-title" routerLink="/">Sklep</a>

        <div class="spacer"></div>

        <a mat-button routerLink='/user'>Użytkownik</a>
        <a mat-button routerLink="/admin">Admin</a>

        <button *ngIf="checkIsNotAdmin()" class="search" mat-mini-fab color="accent" (click)="menuHandler.setIsOpenSearch()">
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

  path: string;

  constructor(public menuHandler: ToolbarServiceService,
              public router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((path: NavigationEnd) => path.url)
    )
      .subscribe(path => {
        this.path = path;
      });
  }

  checkIsNotAdmin = () => (
    this.path !== '/admin'
  )

  ngOnInit(): void {
  }

}
