import {Component, OnInit} from '@angular/core';
import {ViewService} from '../view.service';
import {getOprions} from '../sortOptions.enum';

@Component({
  selector: 'app-sort',
  template: `
    <div class="wrapper">
      <div class="form-group">
        <label for="exampleFormControlSelect1">Sortuj</label>
        <select class="form-control" id="exampleFormControlSelect1" [(ngModel)]="option" (change)="setOption($event)">
          <option *ngFor="let option of sortOptions " [value]="option">{{option}}</option>
        </select>
      </div>
    </div>
  `,
  styles: [`
    .wrapper {
      max-width: 200px;
    }
  `]
})
export class SortComponent implements OnInit {

  sortOptions;
  option: string;

  constructor(private viewService: ViewService) {
    this.sortOptions = Object.values(getOprions());
    viewService.getSortOptionStream().subscribe(oprion => {
      this.option = oprion;
    });
  }

  setOption = ($event) => {
    this.option = $event.target.value;
    this.viewService.sort(this.option);
  };

  ngOnInit(): void {
  }

}
