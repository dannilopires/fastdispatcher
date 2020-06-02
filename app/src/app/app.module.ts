import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatCardModule,
  MatListModule, MatInputModule, MatSelectModule, MatOptionModule, MatDividerModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroDespachanteComponent } from './cadastro-despachante/cadastro-despachante.component';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { HeaderComponent } from './header/header.component';
import { SectionBgComponent } from './section-bg/section-bg.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { SuporteComponent } from './suporte/suporte.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUserComponent,
    CadastroClienteComponent,
    CadastroDespachanteComponent,
    PagInicioComponent,
    HeaderComponent,
    SectionBgComponent,
    QuemSomosComponent,
    SuporteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
