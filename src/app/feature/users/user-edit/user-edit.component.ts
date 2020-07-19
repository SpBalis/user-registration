import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap, Route, Router} from "@angular/router";
import {AngularFirestore} from "@angular/fire/firestore";
import {UserModel} from "../../../shared/models/user.model";
import {UserFormComponent} from "../user-form/user-form.component";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @ViewChild(UserFormComponent, {static: false}) userFormComponent: UserFormComponent;
  id: any;

  constructor( private activatedRoute : ActivatedRoute,
               private router: Router,
               private db: AngularFirestore) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.db
        .collection<UserModel>('users')
        .doc(
          params.get('id')
        ).valueChanges()
        .subscribe((user) => {
          this.userFormComponent.userForm.patchValue(user);
        });
    });
  }

  edit() {
    this.db.collection<UserModel>('users')
      .doc(this.id)
      .update(
        {
          name: this.userFormComponent.userForm.get('name').value,
          phone: this.userFormComponent.userForm.get('phone').value
        }
      ).then(() => {
      this.router.navigate(['']);
    });
  }
}
