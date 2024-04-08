import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { CompaniesService } from '../../companies.service';
import { CompanyInterface } from '../../companies.types';

@Component({
  selector: 'companies-form',
  templateUrl: './companies-form.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class CompaniesFormComponent implements OnInit, OnDestroy {
  public id: number;
  public company: CompanyInterface;
  public form: UntypedFormGroup;
  private readonly unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly service: CompaniesService,
    private readonly formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      socialReason: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
    });

    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id'));

      if (this.id) {
        void this.service.findOne(this.id).pipe(takeUntil(this.unsubscribeAll)).subscribe((res: any): void => {
          this.company = res;
          this.form.patchValue(res);
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  handleSaveOrUpdate(): void {
    this.form.disable();
  }
}
