import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrasilComponent } from './brasil.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: BrasilComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule, BrasilComponent],
  declarations: [BrasilComponent],
})
export class BrasilModule {}
