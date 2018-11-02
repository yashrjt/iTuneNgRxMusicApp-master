import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {User} from '../../models/user';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  userForm: FormGroup;
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() { }

  onSubmit(value) {
      this.submitted.emit(value);
  }


}
