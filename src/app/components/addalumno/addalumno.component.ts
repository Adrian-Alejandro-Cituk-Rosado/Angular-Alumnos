import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

export interface Alumno {
  id: string;
  foto: string;
  nombre: string;
  apellido: string;
  submodulo1: number;
  submodulo2: number;
  calculo: number;
  fisica: number;
  promedio: number;
  estado: string;
}

@Component({
  selector: 'app-add-alumno',
  templateUrl: './addalumno.component.html',
})
export class AddAlumnoComponent {
  @Output() onNewAlumno = new EventEmitter<Alumno>();

  alumno: Alumno = {
    id: '',
    foto: '',
    nombre: '',
    apellido: '',
    submodulo1: 0,
    submodulo2: 0,
    calculo: 0,
    fisica: 0,
    promedio: 0,
    estado: '',
  };

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.alumno.foto = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  emitAlumno() {
    this.alumno.id = uuidv4();
    this.alumno.promedio = this.calcularPromedio();
    this.onNewAlumno.emit(this.alumno);
    this.limpiarFormulario();
  }

  calcularPromedio(): number {
    const total = this.alumno.submodulo1 + this.alumno.submodulo2 + this.alumno.calculo + this.alumno.fisica;
    return total / 4;
  }



  limpiarFormulario() {
    this.alumno = {
      id: '',
      foto: '',
      nombre: '',
      apellido: '',
      submodulo1: 0,
      submodulo2: 0,
      calculo: 0,
      fisica: 0,
      promedio: 0,
      estado: '',
    };
  }

  evitarNumeros(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, '');
  }

}
