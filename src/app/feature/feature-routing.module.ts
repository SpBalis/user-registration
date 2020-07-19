import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersListComponent} from './users-list/users-list.component';
import {UserCreateComponent} from './users/user-create/user-create.component';
import {UserEditComponent} from './users/user-edit/user-edit.component';


const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  },
  {
    path: 'create',
    component: UserCreateComponent
  },
  {
    path: 'edit/:id',
    component: UserEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
}
