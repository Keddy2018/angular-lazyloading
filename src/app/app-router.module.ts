import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes:  Routes = [
  {path: 'argentina', loadChildren: () => import('./components/argentina/argentina.module').then(m => m.ArgentinaModule)},
  {path: 'brasil', loadChildren: () => import('./components/brasil/brasil.module').then(m => m.BrasilModule)},
  {path: 'colombia', loadChildren: () => import('./components/colombia/colombia.module').then(m => m.ColombiaModule)}
]



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRouterModule { }
