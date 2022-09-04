import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArgentinaComponent } from './argentina.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ArgentinaComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule, ArgentinaComponent],
  declarations: [ArgentinaComponent],
})
export class ArgentinaModule {}
