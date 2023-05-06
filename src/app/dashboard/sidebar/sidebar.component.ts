import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';

import { AuthService } from 'src/app/core/services/auth.service';
import { SidenavTogglerService } from 'src/app/core/services/sidenav-toggler.service';
import links from './nav-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<void>();
  showFiller = false;

  links = links;

  @ViewChild('sidenav') private sidenav?: MatSidenav;
  authUser: any;

  constructor(
    private sidenavTogglerService: SidenavTogglerService,
    private authService: AuthService
  ) {
    this.authService
      .getUser()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((user) => {
        
        this.authUser = user;
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  ngOnInit() {
    this.sidenavTogglerService.sideNavToggleSubject.subscribe(() => {
      this.sidenav?.toggle();
    });
  }
}
