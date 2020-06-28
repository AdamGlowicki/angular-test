import {Component, OnInit} from '@angular/core';
import {AdminServiceService} from '../../admin-service.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {getCategories} from '../../category.enum';
import {Products} from '../../products';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-card-detail',
  template: `
    <div *ngIf="isDisplayEditWindow()" class="wrapper p-3">
      <div class="form-group">
        <h3>{{path === '/admin/add' ? 'Dodaj' : 'Edytuj'}}</h3>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Nazwa</label>
        <input type="email" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"
               placeholder="Nazwa" [(ngModel)]="product.name">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Cena</label>
        <div *ngIf="isDisplayExistPriceInput(this.path, this.product)">
          <input *ngFor="let price of product.price; let i = index" [value]="price" (change)="handlePrice($event, i)" type="number"
                 class="form-control form-control-sm" id="exampleInputPassword1" placeholder="Cena"
          >
        </div>
        <div>
          <input [value]="displayEmptyValueIfOnePrice(this.product)" (change)="handleAddPrice($event)" type="number"
                 class="form-control form-control-sm" id="exampleInputPassword1" placeholder="Cena">
        </div>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control" id="exampleFormControlSelect1" [(ngModel)]="product.category" (change)="setCategory($event)">
          <option *ngFor="let category of categories" [value]="category">{{category}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Url</label>
        <input type="text" class="form-control form-control-sm" id="exampleInputPassword1" placeholder="url"
               [(ngModel)]="product.photo">
      </div>
      <button (click)="save(product)" class="btn btn-primary btn-sm">Zapisz</button>
      <button (click)="delete(product)" class="btn btn-danger btn-sm ml-2">Usuń</button>
    </div>
  `,
  styles: [`
    label {
      font-size: 12px;
    }

    .wrapper {
      border: 2px solid grey;
      border-radius: 3px;
    }
  `]
})
export class CardDetailComponent implements OnInit {

  product: Products;
  categories;
  path: string;

  save = (product) => {
    this.adminService.save(product);
    this.router.navigate(['admin', product.id]);

  };

  delete = (product) => {
    this.adminService.delete(product);
    this.router.navigate(['admin']);
  };

  constructor(private adminService: AdminServiceService,
              private router: Router,
              private activeRout: ActivatedRoute) {
    this.categories = Object.values(getCategories());
    router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((path: NavigationEnd) => path.url)
    )
      .subscribe(path => {
        this.path = path;
      });
  }

  handleAddPrice = ($event) => {
    if (this.product.price === undefined) {
      this.product.price = [];
    }
    this.product.price.push($event.target.value);
    $event.target.value = '';
  };

  setCategory = ($event) => {
    this.product.category = $event.target.value;
  };

  handlePrice = ($event, index) => {
    const copy = Object.assign({}, this.product);
    copy.price[index] = $event.target.value;
    this.product = copy;
    $event.target.value = '';
  };

  isProductExist = (product) => (
    product.id
  );

  isAdminPath = (path: string) => (
    path === '/admin/add'
  );

  isDisplayEditWindow = () => (
    this.isAdminPath(this.path) || this.isProductExist(this.product)
  )


  isDisplayExistPriceInput = (path: string, product: Products) => (
    !this.isAdminPath(path) && this.isProductExist(product)
  );

  displayEmptyValueIfOnePrice = (product: Products) => (
    product.price.length === 1 ? '' : product.price
  )

  ngOnInit(): void {
    this.activeRout.params.subscribe(params => {
      const id = parseInt(params['id']);

      this.adminService.getProductsById(id).subscribe(product => {
        this.product = Object.assign({}, product);
      });
    });
  }
}
