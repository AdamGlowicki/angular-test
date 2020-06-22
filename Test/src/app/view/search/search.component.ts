import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search',
  template: `
    <form [formGroup]="searchForm" >
      <mat-form-field placeholder>
        <mat-label>Znajdź produkt</mat-label>
        <input matInput type="text" formControlName="query" class="form-control" placeholder="Znajdź produkt.">
      </mat-form-field>
    </form>
  `,
  styles: [`
  form {
    margin-top: 32px;
    margin-left: 32px;
  }
  `]
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  constructor() {
    this.searchForm = new FormGroup({
      'query': new FormControl()
    });
  }

  ngOnInit(): void {
  }

}
