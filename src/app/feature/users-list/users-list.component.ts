import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

import {CrudService} from "../../shared/injectables/crud.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DeleteModalComponent} from "../../shared/delete-modal/delete-modal.component";
import { Subscription } from 'rxjs';
import {AngularFireDatabase} from "@angular/fire/database";
import {MatTableDataSource} from "@angular/material/table";
import {UserModel} from "../../shared/models/user.model";


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['name', 'phone', 'actions'];
  dataSource = new MatTableDataSource<UserModel>();
  subscription: Subscription;

  name: string;
  phone: string;

  constructor(private router: Router,
              private crudService: CrudService,
              private modalService: NgbModal,
              private db: AngularFireDatabase) {
  }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.crudService.get_all_users().subscribe(data => {
      this.dataSource.data = data;
      // console.log(this.dataSource.data);
    });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  create() {
    this.router.navigate(['/create']);
  }

  edit(id: any) {
    this.router.navigate(['/edit/' + id]);
  }


  delete(id: any) {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.presentedObject = id;

    modalRef.result.then(confirmed => {
      if (confirmed) {
        this.crudService
          .delete_user(id);
      } // confirm
    });
  }

}
