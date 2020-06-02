import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroDespachanteComponent } from './cadastro-despachante/cadastro-despachante.component';
import { PagInicioComponent } from './pag-inicio/pag-inicio.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { SuporteComponent } from './suporte/suporte.component';

const routes: Routes = [

    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'cadastro-user',
        component: CadastroUserComponent
    },

    {
        path: 'cadastro-cliente',
        component: CadastroClienteComponent
    },

    {
        path: 'cadastro-despachante',
        component: CadastroDespachanteComponent
    },

    {
        path: 'quem-somos',
        component: QuemSomosComponent
    },

    {
        path: 'suporte',
        component: SuporteComponent

    },

    {
        path: 'pag-inicio',
        component: PagInicioComponent
    },
    { path: '', redirectTo: '/pag-inicio', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
