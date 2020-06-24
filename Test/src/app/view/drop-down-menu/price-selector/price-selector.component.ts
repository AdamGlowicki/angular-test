import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ViewService} from '../../view.service';

@Component({
  selector: 'app-price-selector',
  template: `
    <form [formGroup]="priceForm">
      <mat-form-field placeholder class="price-selector">
        <mat-label>Cena od:</mat-label>
        <input matInput type="text" formControlName="from" class="form-control" placeholder="Cena od:" autocomplete="off">
      </mat-form-field>
      <mat-form-field placeholder class="price-selector">
        <mat-label>Cena do:</mat-label>
        <input matInput type="text" formControlName="to" class="form-control" placeholder="Cena do:" autocomplete="off">
      </mat-form-field>
    </form>
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: row;
    }

    .price-selector {
      max-width: 100px;
      font-size: 8px;
      padding: 8px;
    }
    @media (max-width: 640px) {
      form {
        display: grid;
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class PriceSelectorComponent implements OnInit {

  priceForm: FormGroup;

  search = () => {
    this.priceForm.get('from').valueChanges
      .subscribe(from => {
        this.viewService.minPrice(from);
      });
    this.priceForm.get('to').valueChanges
      .subscribe(to => {
        this.viewService.maxPrice(to);
        if (!to.length) {
          this.viewService.resetFilter();
        }
      });
  };

  constructor(private viewService: ViewService) {
    this.priceForm = new FormGroup({
      from: new FormControl(this.viewService.from),
      to: new FormControl(this.viewService.to),
    });

    this.search();
  }

  ngOnInit(): void {
  }
}
