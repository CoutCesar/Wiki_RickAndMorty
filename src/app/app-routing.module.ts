// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './personajes/personajes.component';
import { InicioComponent } from './inicio/inicio.component';
import { PersonajeComponent } from './personaje/personaje.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'personaje/:id', component: PersonajeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
