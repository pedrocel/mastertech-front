import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  HubsdTablePaginatorInterface,
  HubsdTableSortInterface,
} from '@hubsd/components/table';
import {
  CompanyFilterInterface,
  CompanyInterface,
  CompanyPaginatedInterface,
} from './companies.types';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  constructor(
    private readonly apollo: Apollo,
    private readonly httpClient: HttpClient
  ) {}

  findAllPaginated(
    sort: HubsdTableSortInterface,
    paginator: HubsdTablePaginatorInterface,
    filters?: CompanyFilterInterface
  ): Observable<{ data: { companies: CompanyPaginatedInterface } }> {
    return this.apollo.watchQuery<any>({
      query: gql`
        query Companies(
          $filters: CompanyFiltersInput = {}
          $paginator: PaginatorInput = {}
          $sort: SortInput = {}
        ) {
          companies(filters: $filters, paginator: $paginator, sort: $sort) {
            rows {
              id
              name
              socialReason
              cnpj
              inviteCode
              users {
                id
                name
              }
              createdAt
              updatedAt
            }
            count
          }
        }
      `,
      variables: { filters, sort, paginator },
    }).valueChanges;
  }

  findAll(): Observable<CompanyInterface[]> {
    return this.httpClient.get<CompanyInterface[]>('@hubsd-api/companies');
  }

  findOne(id: number): Observable<CompanyInterface> {
    return this.httpClient.get<CompanyInterface>(`@hubsd-api/companies/${id}`);
  }

  delete(id: number): Observable<{ message: string }> {
    return this.httpClient.delete<{ message: string }>(
      `@hubsd-api/companies/${id}`
    );
  }
}
