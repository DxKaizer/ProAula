import { ApplicationConfig, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modules
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

//components
import { HomePageComponent } from './components/home-page/home-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { OpcionMenuComponent } from './components/opcion-menu/opcion-menu.component';
import { ListaConsultaComponent } from './components/lista-consulta/lista-consulta.component';
import { ListaConsultaEsComponent } from './components/lista-consulta-es/lista-consulta-es.component';
import { ListaPeluqueriaComponent } from './components/lista-peluqueria/lista-peluqueria.component';
import { AgregarEditarMostrarCitaConsultaComponent } from './components/lista-consulta/agregar-editar-mostrar-cita-consulta/agregar-editar-mostrar-cita-consulta.component';
import { AgregarEditarMostrarCitaConsultaEsComponent } from './components/lista-consulta-es/agregar-editar-mostrar-cita-consulta-es/agregar-editar-mostrar-cita-consulta-es.component';
import { AgregarEditarMostrarCitaPeluqueriaComponent } from './components/lista-peluqueria/agregar-editar-mostrar-cita-peluqueria/agregar-editar-mostrar-cita-peluqueria.component';
import { VistaDetallesConsultaComponent } from './components/lista-consulta/vista-detalles-consulta/vista-detalles-consulta.component';
import { VistaDetallesConsultaEsComponent } from './components/lista-consulta-es/vista-detalles-consulta-es/vista-detalles-consulta-es.component';
import { VistaDetallesPeluqueriaComponent } from './components/lista-peluqueria/vista-detalles-peluqueria/vista-detalles-peluqueria.component';







@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignInComponent,
    LogInComponent,
    NavbarComponent,
    SpinnerComponent,
    OpcionMenuComponent,
    ListaConsultaComponent,
    ListaConsultaEsComponent,
    ListaPeluqueriaComponent,
    AgregarEditarMostrarCitaConsultaComponent,
    AgregarEditarMostrarCitaConsultaEsComponent,
    AgregarEditarMostrarCitaPeluqueriaComponent,
    VistaDetallesConsultaComponent,
    VistaDetallesConsultaEsComponent,
    VistaDetallesPeluqueriaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }
    ), 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


