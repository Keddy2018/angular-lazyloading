import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes:  Routes = [
  {path: 'paises', loadChildren: () => import('./components/paises.module').then(m => m.PaisesModule)},
]



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRouterModule { }
