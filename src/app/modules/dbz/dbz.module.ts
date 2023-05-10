import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FormAgregarPersonajeComponent } from './components/form-agregar-personaje/form-agregar-personaje.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    ListadoComponent,
    FormAgregarPersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
