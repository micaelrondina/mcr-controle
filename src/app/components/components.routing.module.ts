import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ConsultarComponent } from './consultar/consultar.component';
import { AuthGuard } from '../shared/auth.guard';
import { DietaComponent } from './dieta/dieta.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
