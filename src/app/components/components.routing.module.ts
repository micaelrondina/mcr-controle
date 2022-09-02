import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ConsultarComponent } from './consultar/consultar.component';
import { AuthGuard } from '../shared/auth.guard';
import { DietaComponent } from './dieta/dieta.component';
import { RelGerFilasEmissorComponent } from './ger-filas-emissor/ger-filas-emissor.component';
import { HomeComponent } from './home/home.component';
import { RelEvent1386Component } from './rel-event-386/rel-event-386.component';
import { SemAcessoComponent } from './sem-acesso/sem-acesso.component';

const routes: Routes = [
  {
    path: 'dieta', component: DietaComponent, canActivate: [AuthGuard], data: {
      accessRole: 'br.micael.dieta' //permissao que essa rota precisa para ser acessada
    },
  },
  {
    path: 'financeiro', component: DietaComponent, canActivate: [AuthGuard], data: {
      accessRole: 'br.micael.financeiro3'
    }
  },
  {
    path: 'rel-eventos-1386', component: RelEvent1386Component, canActivate: [AuthGuard], data: {
      accessRole: 'br.micael.dieta'
    }
  },

  {
    path: 'ger-filas-emissor', component: RelGerFilasEmissorComponent, canActivate: [AuthGuard], data: {
      accessRole: 'br.micael.dieta'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
