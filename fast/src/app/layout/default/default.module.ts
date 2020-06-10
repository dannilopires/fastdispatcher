import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { CadastroComponent } from 'src/app/modules/cadastro/cadastro.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { CadastroUserComponent } from 'src/app/modules/cadastro/cadastro-user/cadastro-user.component';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { PgInicialComponent } from 'src/app/modules/pg-inicial/pg-inicial.component';



@NgModule({
  declarations: [
    DefaultComponent,
    LoginComponent,
    CadastroComponent,
    CadastroUserComponent,
    PgInicialComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    AppMaterialModule
  ]
})
export class DefaultModule { }
