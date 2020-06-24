import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ViewRoutingModule} from './view-routing.module';
import {ToolBarComponent} from './tool-bar/tool-bar.component';
import {UserViewComponent} from './user-view/user-view.component';
import {AdminViewComponent} from './admin-view/admin-view.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {CardComponent} from './user-view/card/card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {SearchComponent} from './search/search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ViewService} from './view.service';
import {products} from './products-data.data';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {ToolbarServiceService} from './tool-bar/toolbar-service.service';
import {DropDownMenuComponent} from './drop-down-menu/drop-down-menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {PriceSelectorComponent} from './drop-down-menu/price-selector/price-selector.component';
import {CategoryComponent} from './drop-down-menu/category/category.component';
import {MAT_CHECKBOX_CLICK_ACTION, MatCheckboxModule} from '@angular/material/checkbox';
import {CardDetailComponent} from './admin-view/card-detail/card-detail.component';
import {AdminServiceService} from './admin-service.service';
import {ProductsTableComponent} from './admin-view/products-table/products-table.component';


@NgModule({
  declarations: [ToolBarComponent, UserViewComponent, AdminViewComponent, CardComponent, SearchComponent, DropDownMenuComponent, PriceSelectorComponent, CategoryComponent, CardDetailComponent, ProductsTableComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    MatCheckboxModule,
  ],
  providers: [
    ViewService,
    AdminServiceService,
    ToolbarServiceService,
    {provide: 'ProductsData', useValue: products},
    {provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'}
  ]
})
export class ViewModule {
}
