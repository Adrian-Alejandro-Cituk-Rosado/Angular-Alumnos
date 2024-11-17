import { Injectable } from '@angular/core';
import { Alumno } from '../interfaces/alumnos-interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  private alumnos: Alumno[] = [
    {
      id: uuidv4(),
      foto: 'assets/images/Alumno1.jpg',
      nombre: 'Aarón',
      apellido: 'Coh',
      submodulo1: 5,
      submodulo2: 5,
      calculo: 5,
      fisica: 5,
    },
    {
      id: uuidv4(),
      foto: 'assets/images/Alumno2.jpg',
      nombre: 'Emmanuel',
      apellido: 'Osorio',
      submodulo1: 6,
      submodulo2: 8,
      calculo: 7,
      fisica: 7,
    },
    {
      id: uuidv4(),
      foto: 'assets/images/Alumno3.jpg',
      nombre: 'Santiago',
      apellido: 'Pech',
      submodulo1: 10,
      submodulo2: 10,
      calculo: 10,
      fisica: 10,
    },
  ];

  agregarAlumno(alumno: Alumno): void {
    alumno.id = uuidv4();
    this.alumnos.push(alumno);
  }

  obtenerAlumnos(): Alumno[] {
    return this.alumnos;
  }

  calcularPromedio(alumno: Alumno): number {
    const total = alumno.submodulo1 + alumno.submodulo2 + alumno.calculo + alumno.fisica;
    return total / 4;
  }

  estadoAlumno(alumno: Alumno): string {
    const promedio = this.calcularPromedio(alumno);

    if (promedio === 10) {
      return 'Exentado';
    } else if (promedio >= 6 && promedio < 10) {
      return 'Aprobado';
    } else {
      return 'Reprobado';
    }
  }

  eliminarAlumno(id: string): void {
    this.alumnos = this.alumnos.filter(alumno => alumno.id !== id);
  }
}
