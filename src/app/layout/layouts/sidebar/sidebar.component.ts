import { Subject, takeUntil } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { UserJWTInterface } from '../../../core/user/user.types';
import { NavigationService } from '../../../core/navigation/navigation.service';
import { NavigationInterface } from '../../../core/navigation/navigation.types';

import { UserService } from '../../../core/user/user.service';
import { CommonService } from '../../../../app/core/common/common.service';

@Component({
  selector: 'sidebar-layout',
  templateUrl: './sidebar.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class SidebarLayoutComponent implements OnInit, OnDestroy {
  public title = '';
  public companyTitle = null;
  public isMobile: boolean = false;
  public hovered: boolean = false;
  public navigation: NavigationInterface[];

  private currentRoute = '';
  private readonly unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly common: CommonService,
    private readonly service: NavigationService,
    private readonly breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
    this.userService.user$.subscribe((res: UserJWTInterface) => {
      this.companyTitle = res.company ? res.company.name : null;
    });
    this.currentRoute = this.router.url.split('/')[1];

    this.router.events
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentRoute = event.url.split('/')[1];
          const title = this.navigation.find((menu) =>
            menu.route.includes(this.currentRoute)
          );
          if (title) this.title = title.menu;
        }
      });
  }

  ngOnInit(): void {
    this.common
      .findAllCities()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe();

    this.service
      .get()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((res: UserJWTInterface) => {
        this.navigation = res.menus;
        const title = res.menus.find((menu) =>
          menu.route.includes(this.currentRoute)
        );
        if (title) this.title = title.menu;
        else this.title = '';
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next(null);
    this.unsubscribeAll.complete();
  }

  handleHovered(event: boolean): void {
    this.hovered = event;
  }
}
