import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietaComponent } from './components/dieta/dieta.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
