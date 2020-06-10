import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterrComponent } from './components/footerr/footerr.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../app-material/app-material.module';
import { AlertComponent } from './components/alert/alert.component';
import { HeaderLogadoComponent } from './components/header-logado/header-logado.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterrComponent,
    SidebarComponent,
    AlertComponent,
    HeaderLogadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    FooterrComponent,
    SidebarComponent,
    AlertComponent,
    HeaderLogadoComponent,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ]
})
export class SharedModule { }
