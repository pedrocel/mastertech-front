import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

import { HubsdToastService } from '@hubsd/services/toast';

import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'auth-forgot-password',
  templateUrl: './forgot-password.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AuthForgotPasswordComponent implements OnInit {
  public forgotPasswordForm: UntypedFormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly toastService: HubsdToastService,
    private readonly formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  handleRequest(): void {
    this.forgotPasswordForm.disable();

    this.authService
      .forgotPassword(this.forgotPasswordForm.value)
      .pipe(
        finalize(() => {
          this.forgotPasswordForm.enable();
        })
      )
      .subscribe({
        next: (res) => {
          this.toastService.handleMessage(res, null,{ handleRequest: true });
          this.router.navigateByUrl('/login');
        },
        error: (error) => {
          this.toastService.handleMessage(
            error,
            'Não foi possível fazer login.',
            { handleRequest: true }
          );
        },
      });
  }
}
