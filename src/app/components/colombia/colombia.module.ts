import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColombiaComponent } from './colombia.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ColombiaComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule, ColombiaComponent],
  declarations: [ColombiaComponent],
})
export class ColombiaModule {}
