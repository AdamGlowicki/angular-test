import {Component, OnInit} from '@angular/core';
import {SearchCategory, ViewService} from '../../view.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-category',
  template: `
    <form [formGroup]="checked" class="wrapper">
        <h3>Kategorie</h3>
        <mat-checkbox [formControlName]="category.category" *ngFor="let category of categories">{{category.category}}</mat-checkbox>
    </form>
  `,
  styles: [`
  .wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    font-size: 12px;
  }
  `]
})
export class CategoryComponent implements OnInit {

  checked: FormGroup;
  controls = {};
  categories: SearchCategory[] = [];

  search = () => {
    this.categories.forEach(category => {
      this.checked.get(category.category).valueChanges.subscribe(value => {
        category.checked = value;
        this.viewService.updateCategory(category);
        this.viewService.updateProducts();
        if (!this.viewService.checkedCategoryLength) {
          this.viewService.resetFilter();
        }
      });
    });
  };

  createControls = () => {
    this.categories.forEach(category => {
      this.controls = {[category.category]: new FormControl(category.checked), ...this.controls};
    });
  };

  constructor(public viewService: ViewService) {
    viewService.getCategoriesStream().subscribe(categories => {
      this.categories = categories;
    });

    this.createControls();
    this.checked = new FormGroup(this.controls);
    this.search();
  }

  ngOnInit(): void {
  }

}
