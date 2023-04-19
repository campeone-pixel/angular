import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/auth.service';
import { SidenavTogglerService } from 'src/app/core/services/sidenav-toggler.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<void>();
  showFiller = false;

  @ViewChild('sidenav') private sidenav?: MatSidenav;
  authUser: User | null = null;

  constructor(
    private sidenavTogglerService: SidenavTogglerService,
    private authService: AuthService
  ) {
    this.authService
      .obtenerUsuarioAutenticado()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((user) => (this.authUser = user));
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
