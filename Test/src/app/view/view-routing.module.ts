import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserViewComponent} from './user-view/user-view.component';
import {AdminViewComponent} from './admin-view/admin-view.component';
import {ToolBarComponent} from './tool-bar/tool-bar.component';
import {CardDetailComponent} from './admin-view/card-detail/card-detail.component';


const routes: Routes = [
  {
    path: '',
    component: ToolBarComponent,
    children: [
      {path: '', redirectTo: 'user', pathMatch: 'full'},
      {path: 'user', component: UserViewComponent},
      {
        path: 'admin',
        component: AdminViewComponent,
        children: [
          {path: '', component: CardDetailComponent},
          {path: ':id', component: CardDetailComponent},
          {path: 'add', component: CardDetailComponent},
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
