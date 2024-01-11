// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajeComponent } from './personaje/personaje.component'; // Agrega la importación del componente PersonajeComponent

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PersonajesComponent,
    PersonajeComponent // Agrega el componente PersonajeComponent al array de declaraciones
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot([]), // Configura el RouterModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
