import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor() { }

  ngOnInit() {
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    return;
  }
}
