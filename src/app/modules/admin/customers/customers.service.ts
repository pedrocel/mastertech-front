import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

import {
  HubsdTablePaginatorInterface,
  HubsdTableSortInterface,
} from '@hubsd/components/table';
import {
  CustomerFilterInterface,
  CustomerInterface,
  CustomerPaginatedInterface,
} from './customers.types';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  constructor(
    private readonly apollo: Apollo,
    private readonly httpClient: HttpClient
  ) {}

  findAllPaginated(
    sort: HubsdTableSortInterface,
    paginator: HubsdTablePaginatorInterface,
    filters?: CustomerFilterInterface
  ): Observable<{ data: { clients: CustomerPaginatedInterface } }> {
    return this.apollo.watchQuery<any>({
      query: gql`
        query Customers(
          $filters: UserFiltersInput = {}
          $paginator: PaginatorInput = {}
          $sort: SortInput = {}
        ) {
          clients(filters: $filters, paginator: $paginator, sort: $sort) {
            rows {
              id
              name
              email
              company {
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

  findOne(id: number): Observable<CustomerInterface> {
    return this.httpClient.get<CustomerInterface>(`@hubsd-api/users/${id}`);
  }

  delete(id: number): Observable<{ message: string }> {
    return this.httpClient.delete<{ message: string }>(
      `@hubsd-api/users/${id}`
    );
  }
  create(user: CustomerInterface): Observable<{ message: string }> {
    return this.httpClient.post<{ message: string }>('@hubsd-api/users', user);
  }
}
