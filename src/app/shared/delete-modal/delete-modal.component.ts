import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  @Input() presentedObject: any;
  @Input() paragraph1: string;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

}
