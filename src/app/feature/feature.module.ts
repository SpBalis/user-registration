import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersListComponent} from './users-list/users-list.component';
import {UserCreateComponent} from './users/user-create/user-create.component';
import {UserEditComponent} from './users/user-edit/user-edit.component';
import {UserFormComponent} from './users/user-form/user-form.component';
import {FeatureRoutingModule} from './feature-routing.module';
import {MaterialModule} from '../shared/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    UsersListComponent,
    UserCreateComponent,
    UserEditComponent,
    UserFormComponent,

  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeatureModule {
}
