import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createUserForm();
  }

  createUserForm() {
    this.userForm = this.fb.group({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
    });
  }
}
