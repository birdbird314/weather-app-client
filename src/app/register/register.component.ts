import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  passwordsDoNotMatch = false;

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    if (this.authService.isLoggedIn()) { 
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  get form() { return this.registerForm.controls; }

  passwordsMatch(): boolean {
    let password = this.form.password.value;
    let confirmPassword = this.form.confirmPassword.value;
    return password && (password === confirmPassword);
  }

  validatePasswords(): void {
    this.passwordsDoNotMatch = !this.passwordsMatch();
  }
  
  onSubmit(): void {
    this.submitted = true;
    this.validatePasswords();
    if (this.registerForm.invalid || this.passwordsDoNotMatch) {
      return;
    }
  }
}
