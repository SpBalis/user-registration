import {Component, OnInit, ViewChild} from '@angular/core';
import {UserFormComponent} from '../user-form/user-form.component';
import {Router} from '@angular/router';
import {CrudService} from "../../../shared/injectables/crud.service";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  @ViewChild(UserFormComponent, {static: false}) userFormComponent: UserFormComponent;


  constructor(private crudService: CrudService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {

    if (this.userFormComponent.userForm.value == null) {
      alert('You have to fill the fields');
      return;
    }

    this.crudService.create_user(this.userFormComponent.userForm.value).then(() => {
      this.router.navigate(['']);
    });
  }
}
