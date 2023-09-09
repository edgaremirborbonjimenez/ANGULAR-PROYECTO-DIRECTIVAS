import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.module';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosDataServiceService } from '../empleados-data-service.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit{

  empleados:Empleado[];

  constructor(private empleadoDataService:EmpleadosDataServiceService){}

  title = 'Ingresar Empleado';
  nombre:string='';
  apellido:string='';
  cargo:string='';
  salario:number=0;
  

agregarEmpleado(){

  const empleado = new Empleado(this.nombre,this.apellido,this.cargo,this.salario);

  let mensaje = `Se agregara al sigueinte empleado: ${this.nombre} ${this.apellido} ${this.cargo} ${this.salario}`;
  //this.miServicio.muestraMensaje(mensaje);
  
  this.empleadoDataService.agregarEmpleadoService(empleado);
}

  //Este metodo se ejecuta automaticamente despues de que el constructor se ejecute
  ngOnInit(): void {
    this.empleados=this.empleadoDataService.listaDeEmpleados();
  }
}
