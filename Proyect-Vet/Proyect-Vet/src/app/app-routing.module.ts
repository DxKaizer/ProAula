import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

// Guards
import { AuthGuard } from './utils/auth.guard';
import { OpcionMenuComponent } from './components/opcion-menu/opcion-menu.component';
import { ListaConsultaComponent } from './components/lista-consulta/lista-consulta.component';
import { ListaConsultaEsComponent } from './components/lista-consulta-es/lista-consulta-es.component';
import { AgregarEditarMostrarCitaConsultaComponent } from './components/lista-consulta/agregar-editar-mostrar-cita-consulta/agregar-editar-mostrar-cita-consulta.component';
import { ListaPeluqueriaComponent } from './components/lista-peluqueria/lista-peluqueria.component';
import { AgregarEditarMostrarCitaConsultaEsComponent } from './components/lista-consulta-es/agregar-editar-mostrar-cita-consulta-es/agregar-editar-mostrar-cita-consulta-es.component';
import { VistaDetallesConsultaComponent } from './components/lista-consulta/vista-detalles-consulta/vista-detalles-consulta.component';
import { VistaDetallesConsultaEsComponent } from './components/lista-consulta-es/vista-detalles-consulta-es/vista-detalles-consulta-es.component';
import { AgregarEditarMostrarCitaPeluqueriaComponent } from './components/lista-peluqueria/agregar-editar-mostrar-cita-peluqueria/agregar-editar-mostrar-cita-peluqueria.component';
import { VistaDetallesPeluqueriaComponent } from './components/lista-peluqueria/vista-detalles-peluqueria/vista-detalles-peluqueria.component';

const routes: Routes = [

  //Inicio
  { path: '', redirectTo: 'homePage', pathMatch: 'full' },
  { path: '', component: HomePageComponent },

  //login
  { path: 'login', component: LogInComponent },
  { path: 'sigIn', component: SignInComponent },
  //menu
  { path: 'opcionMenu', component: OpcionMenuComponent, canActivate: [AuthGuard] },

  //ListaConsulta-Crear
  { path: 'ListaConsulta', component: ListaConsultaComponent},
  { path: 'AgregarConsulta', component: AgregarEditarMostrarCitaConsultaComponent },
  { path: 'EditarConsulta/:id', component: AgregarEditarMostrarCitaConsultaComponent },
  { path: 'VistaConsulta/:id', component: VistaDetallesConsultaComponent},

  //ListaConsultaEs-Crear
  { path: 'ListaConsultaEs', component: ListaConsultaEsComponent },
  { path: 'AgregarConsultaEs', component: AgregarEditarMostrarCitaConsultaEsComponent},
  { path: 'EditarConsultaEs/:id', component: AgregarEditarMostrarCitaConsultaEsComponent},
  { path: 'VistaConsultaEs/:id',component: VistaDetallesConsultaEsComponent},

  //ListaPeluqueria-Crear

  { path: 'ListaPeluqueria', component: ListaPeluqueriaComponent},
  { path: 'AgregarPeluqueria', component: AgregarEditarMostrarCitaPeluqueriaComponent },
  {path: 'EditarPeluqueria/:id', component: AgregarEditarMostrarCitaPeluqueriaComponent},
  {path: 'vistaPeluqueria/:id', component:VistaDetallesPeluqueriaComponent},

  //redireccion
  { path: '**', redirectTo: 'homePage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
