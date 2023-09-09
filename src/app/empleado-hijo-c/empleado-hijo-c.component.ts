import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.module';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {

@Input() empleadoDeLista:Empleado;
@Input() indice:number;
caracteristicasArray:string[]=[];

constructor(private miServicio:ServicioEmpleadosService){}

agregarCaracteristica(nuevaCaracteristica:string){

  this.miServicio.muestraMensaje(`Se agrego la siguiente caracteristica: ${nuevaCaracteristica}`);

  this.caracteristicasArray.push(nuevaCaracteristica);

}

}
