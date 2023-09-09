import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from '../empleado.module';
import { EmpleadosDataServiceService } from '../empleados-data-service.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent {

  title = 'Ingresar Empleado';
  nombre:string='';
  apellido:string='';
  cargo:string='';
  salario:number=0;
  
  constructor(private miServicio:ServicioEmpleadosService, private empleadoDataService:EmpleadosDataServiceService,private router:Router){

  }

agregarEmpleado(){

  const empleado = new Empleado(this.nombre,this.apellido,this.cargo,this.salario);

  let mensaje = `Se agregara al sigueinte empleado: ${this.nombre} ${this.apellido} ${this.cargo} ${this.salario}`;
  //this.miServicio.muestraMensaje(mensaje);
  
  this.empleadoDataService.agregarEmpleadoService(empleado);
  this.volverHome();
}

  volverHome(){
    
    this.router.navigate([''])
    
  }

}
