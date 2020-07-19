import {Injectable} from '@angular/core';

import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {UserModel} from "../models/user.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  userCollection: AngularFirestoreCollection<UserModel>;
  users: Observable<UserModel[]>;

  constructor(
    private firestore: AngularFirestore) {
    this.userCollection = firestore.collection('users');

    this.users = this.userCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(user => {
        const data = user.payload.doc.data() as UserModel;
        data.id = user.payload.doc.id;
        return data;
      })
    }))
  }

  get_all_users() {
    return this.users;
  }

  create_user(record) {
    return this.firestore.collection('users').add(record);
  }


  delete_user(id) {
    this.firestore.doc('users/' + id).delete();
  }
}
