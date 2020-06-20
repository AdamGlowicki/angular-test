import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import {ToolBarComponent} from './tool-bar/tool-bar.component';
import {UserViewComponent} from './user-view/user-view.component';
import {AdminViewComponent} from './admin-view/admin-view.component';
import {EditComponent} from './admin-view/edit.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {CardComponent} from './user-view/card/card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SerchComponent } from './serch/serch.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ToolBarComponent, UserViewComponent, AdminViewComponent, EditComponent, CardComponent, SerchComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule
  ]
})
export class ViewModule { }
