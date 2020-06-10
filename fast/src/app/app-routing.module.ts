import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { LoginComponent } from './modules/login/login.component';
import { FullwidthComponent } from './layout/fullwidth/fullwidth.component';
import { CadastroUserComponent } from './modules/cadastro/cadastro-user/cadastro-user.component';
import { PgInicialComponent } from './modules/pg-inicial/pg-inicial.component';
import { AuthGuard } from './_helpers';


const routes: Routes = [{
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: PgInicialComponent
      },
      {
      path: 'cadastro',
      component: CadastroComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'cadastro-user',
      component: CadastroUserComponent
    }]
  },
  {
    path: '',
    component: FullwidthComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  }

];
    /*{
    path: '',
    component: FullwidthComponent,
    children: [{
      path: 'login',
      component: LoginComponent
    }]
   {
      path: '',
      component: FullwidthComponent,
      children: [{
        path: 'login',
        component: LoginComponent
      }]
  } */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
