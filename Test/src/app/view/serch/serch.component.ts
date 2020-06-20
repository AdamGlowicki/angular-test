import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-serch',
  template: `
    <form [formGroup]="searchForm" ></form>
  `,
  styles: []
})
export class SerchComponent implements OnInit {

  searchForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
