import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserViewComponent} from './user-view/user-view.component';
import {AdminViewComponent} from './admin-view/admin-view.component';
import {ToolBarComponent} from './tool-bar/tool-bar.component';


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
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
