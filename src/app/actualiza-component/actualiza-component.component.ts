import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.module';
import { EmpleadosDataServiceService } from '../empleados-data-service.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {
  nombre:string;
  apellido:string;
  cargo:string;
  salario:number;
  indice:number;

  accion:number;

  constructor(private miServicio:ServicioEmpleadosService,private activatedRoute:ActivatedRoute,private empleadoDataService:EmpleadosDataServiceService,private router:Router){}

ngOnInit(): void {
this.accion = parseInt(this.activatedRoute.snapshot.queryParams['accion']); //Establecemos un QueryParam

    this.indice=this.activatedRoute.snapshot.params['id'];

    let empleado:Empleado = this.empleadoDataService.encontrarEmpleado(this.indice);

  this.nombre=empleado.nombre;
  this.apellido=empleado.apellido;
  this.cargo=empleado.cargo;
  this.salario=empleado.salario;

  }

  /* 
  actualizarEmpleado(){

    let empleado = new Empleado(this.nombre,this.apellido,this.cargo,this.salario);

this.empleadoDataService.acutalizarEmpleado(this.indice,empleado);

this.miServicio.muestraMensaje(`Se a actualizado el siguiente empleado a los siguientes datos ${this.nombre} ${this.apellido} ${this.cargo} ${this.salario}`)

this.volverHome();

  }

  eliminarEmpleado(){

    this.empleadoDataService.eliminarEmpleado(this.indice);
    this.miServicio.muestraMensaje(`Se a eliminado el empeleado con exito`);
    this.volverHome();

  }
*/

ejecutarOperacion(){
  if(this.accion==1){

    let empleado = new Empleado(this.nombre,this.apellido,this.cargo,this.salario);

    this.empleadoDataService.acutalizarEmpleado(this.indice,empleado);
    
    this.miServicio.muestraMensaje(`Se a actualizado el siguiente empleado a los siguientes datos ${this.nombre} ${this.apellido} ${this.cargo} ${this.salario}`)
    
    this.volverHome();

  }else{
    this.empleadoDataService.eliminarEmpleado(this.indice);
    this.miServicio.muestraMensaje(`Se a eliminado el empeleado con exito`);
    this.volverHome();
  }
}

  volverHome(){
    
    this.router.navigate([''])
    
  }

}
