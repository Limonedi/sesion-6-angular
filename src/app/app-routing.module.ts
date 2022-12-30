import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './usuarios/contactos/contactos.component';
import { InicioComponent } from './usuarios/inicio/inicio.component';
import { NosotrosComponent } from './usuarios/nosotros/nosotros.component';
import { ServiciosComponent } from './usuarios/servicios/servicios.component';

const routes: Routes = [
  { path: '', redirectTo:'inicio', pathMatch:'full'},
  { path: 'inicio', component: InicioComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'servicios', component: ServiciosComponent},
  { path: 'contactos', component: ContactosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }