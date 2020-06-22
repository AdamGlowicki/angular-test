import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ViewService} from '../view.service';
import {debounce, distinctUntilChanged, filter} from 'rxjs/operators';

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
  styles: []
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  search = () => {
    this.searchForm.get('query').valueChanges
      .subscribe(query => {
        this.viewService.search(query);
      });
  };

  constructor(private viewService: ViewService) {
    this.searchForm = new FormGroup({
      'query': new FormControl()
    });
    this.search();
  }

  ngOnInit(): void {
  }

}
