import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgForm, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'landing-contact',
  templateUrl: './contact.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class LandingContactComponent implements OnInit {
  @ViewChild('contactNgForm') contactNgForm: NgForm;
  cnpjPattern = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

  public contactForm: UntypedFormGroup;

  constructor(private readonly formBuilder: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      cnpj: ['', [Validators.required, Validators.pattern(this.cnpjPattern),]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],
      reason: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }
}
