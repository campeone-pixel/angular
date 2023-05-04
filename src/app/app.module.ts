import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
// import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatDialogModule,
    // Este import no deberia estar aca
    // Porque el DashboardModule ya se esta cargando por lazy loading
    // con la importacion de AppRoutingModule...
    // lo que sucede al dejar ambos imports es que se duplica la declaracion de rutas
    // DashboardModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
