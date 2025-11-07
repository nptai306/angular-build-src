import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  standalone: true,
  selector: 'app-sign-up',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, SvgIconComponent],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  passwordTextType = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      acceptTerms: [false, [Validators.requiredTrue]],
    });
  }

  ngOnInit(): void {}

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) return;
    if (this.f['password'].value !== this.f['confirmPassword'].value) {
      this.f['confirmPassword'].setErrors({ mismatch: true });
      return;
    }
    // TODO: perform signup action
    console.log('Sign up data', this.form.value);
  }
}
