import { Injectable } from '@angular/core';
import { Empleado } from './empleado.module';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosDataServiceService {

  empleados:Empleado[]=[
    new Empleado('Emir','Borbon','Programador',5000),
    new Empleado('Oscar','Minjarez','Programador',5000),
    new Empleado('Daniel','Peña','Programador',5000),
    new Empleado('Luis','Toledo','Programador',5000),
    new Empleado('Gibran','Duran','Programador',5000),
  ];

  constructor(private alertMessage:ServicioEmpleadosService) { }


  agregarEmpleadoService(empleado:Empleado){

    const mensaje=`Se agrego la siguiemte persona ${empleado.nombre} ${empleado.apellido} ${empleado.cargo} ${empleado.salario}`;

    this.alertMessage.muestraMensaje(mensaje);

    this.empleados.push(empleado);

  } 

  encontrarEmpleado(indice:number):Empleado{

    const emplado = this.empleados[indice];
    return emplado;

  }

  acutalizarEmpleado(indice:number,empleado:Empleado):Empleado{

    this.empleados[indice]=empleado;

    return empleado;

  }

  eliminarEmpleado(indice:number){

  this.empleados.splice(indice,1);

  }

  listaDeEmpleados(){
    return this.empleados;
  }  

}
