import { Component, OnInit } from '@angular/core';
import { Alumno } from '../interfaces/alumnos-interface';
import { AlumnosService } from '../services/alumnos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public alumnos: Alumno[] = [];

  constructor(private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.alumnos = this.alumnosService.obtenerAlumnos();
  }

  calcularPromedio(alumno: Alumno): number {
    return this.alumnosService.calcularPromedio(alumno);
  }

  estado(alumno: Alumno): string {
    return this.alumnosService.estadoAlumno(alumno);
  }
}
