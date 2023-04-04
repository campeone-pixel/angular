import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BloqueRedondeadoModule } from './directives/bloque-redondeado/bloque-redondeado.module';
import { ModalFormComponent } from './shared/modalform/modalForm.component';
import { ReactiveFormsModule } from '@angular/forms';

import { FormErrorComponent } from './shared/form-error/form-error.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContenidoComponent,
    SidebarComponent,
    ModalFormComponent,

    FormErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    BloqueRedondeadoModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
