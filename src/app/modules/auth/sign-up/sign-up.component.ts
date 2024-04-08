import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-sign-up',
  templateUrl: './sign-up.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AuthSignUpComponent implements OnInit {
  @ViewChild('signUpNgForm') signUpNgForm: NgForm;

  showStep1: boolean = true;

  showStep2() {
    this.showStep1 = false;
  }

  cnpjPattern = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

  public signUpForm: UntypedFormGroup;
  public signUpForm2: UntypedFormGroup;

  constructor(
    private readonly formBuilder: UntypedFormBuilder,

  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      cnpj: ['', [Validators.required, Validators.pattern(this.cnpjPattern),]],
      reason: ['', [Validators.required]],
    });

    this.signUpForm2 = this.formBuilder.group({
      password: ['', [Validators.required]],
    })
  }
}
