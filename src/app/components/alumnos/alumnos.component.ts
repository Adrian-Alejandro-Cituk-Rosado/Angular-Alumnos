import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../interfaces/alumnos-interface';
import { AlumnosService } from '../../services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
})
export class AlumnosComponent implements OnInit {
  public alumnos: Alumno[] = [];

  constructor(private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.alumnos = this.alumnosService.obtenerAlumnos();
  }

  onNewAlumno(alumno: Alumno) {
    this.alumnosService.agregarAlumno(alumno);
    this.alumnos = this.alumnosService.obtenerAlumnos();
  }

  estado(alumno: Alumno): string {
    return this.alumnosService.estadoAlumno(alumno);
  }

  estadoClass(alumno: Alumno): string {
    const promedio = this.alumnosService.calcularPromedio(alumno);
    if (promedio >= 6 && promedio < 10) {
      return 'text-green';
    } else if (promedio === 10) {
      return 'text-blue';
    } else {
      return 'text-red';
    }
  }

  eliminarAlumno(id: string): void {
    this.alumnosService.eliminarAlumno(id);
    this.alumnos = this.alumnosService.obtenerAlumnos();
  }

  calcularPromedio(alumno: Alumno): number {
    return this.alumnosService.calcularPromedio(alumno);
  }
}
