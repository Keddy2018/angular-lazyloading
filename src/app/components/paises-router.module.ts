import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes:  Routes = [
  {path: 'argentina', loadChildren: () => import('./argentina/argentina.module').then(m => m.ArgentinaModule)},
  {path: 'brasil', loadChildren: () => import('./brasil/brasil.module').then(m => m.BrasilModule)},
  {path: 'colombia', loadChildren: () => import('./colombia/colombia.module').then(m => m.ColombiaModule)}
]



@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PaisesRouterModule { }
