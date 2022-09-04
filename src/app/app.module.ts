import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { ArgentinaComponent } from './components/argentina/argentina.component';
import { ArgentinaModule } from './components/argentina/argentina.module';
import { BrasilComponent } from './components/brasil/brasil.component';
import { BrasilModule } from './components/brasil/brasil.module';
import { ColombiaComponent } from './components/colombia/colombia.component';
import { ColombiaModule } from './components/colombia/colombia.module';
import { NavegacionComponent } from './components/navegacion/navegacion.component';

@NgModule({
  declarations: [
    AppComponent, NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
