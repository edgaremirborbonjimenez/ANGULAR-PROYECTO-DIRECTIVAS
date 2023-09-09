import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosDataServiceService } from './empleados-data-service.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { QuienesSomosComponentComponent } from './quienes-somos-component/quienes-somos-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { Routes,RouterModule } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';

const appRoutes:Routes=[   //Aqui estaran las rutas

{path:'',component:HomeComponentComponent},
{path:'proyectos',component:ProyectosComponentComponent},
{path:'quienes',component:QuienesSomosComponentComponent},
{path:'contacto',component:ContactoComponentComponent},
{path:'actualiza/:id',component:ActualizaComponentComponent},
{path:'**',component:ErrorPersonalizadoComponent}, //En caso de que la URL no existe mandara a este componente Nota:Este path debe estar siempre a lo ultimo


]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    QuienesSomosComponentComponent,
    ContactoComponentComponent,
    ProyectosComponentComponent,
    ActualizaComponentComponent,
  ErrorPersonalizadoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), //Indica que queremos utilizar este enrutador
  ],
  providers: [ServicioEmpleadosService,EmpleadosDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
