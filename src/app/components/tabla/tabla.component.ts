import { Component, OnInit } from '@angular/core';

export interface Alumno {
  nombre: string;
  apellidos: string;
  edad: number;
  nota: number;
}

const ALUMNOS: Alumno[] = [
    {nombre: 'Jose Luis', apellidos: 'Gil Martín', edad: 19, nota: 8.5},
    {nombre: 'Manuel', apellidos: 'Tejada Moreno', edad: 31, nota: 7.8},
    {nombre: 'Víctor', apellidos: 'Frontález Carro', edad: 19, nota: 5.8},
    {nombre: 'Rogelio', apellidos: 'Mohigefer Barrera', edad: 32, nota: 6.3},
    {nombre: 'David', apellidos: 'García María', edad: 19, nota: 7.3},
    {nombre: 'Mario', apellidos: 'Ruiz López', edad: 28, nota: 9.4},
    {nombre: 'Carlos Jesús', apellidos: 'Durbán Viloca', edad: 31, nota: 9.2},
    {nombre: 'Álvaro', apellidos: 'Franco Martínez', edad: 26, nota: 9.7},
    {nombre: 'Jerónimo Manuel', apellidos: 'Pérez González', edad: 30, nota: 8.4},
    {nombre: 'Luis Miguel', apellidos: 'Serón Delgado', edad: 31, nota: 6.2}
]

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellidos', 'edad', 'nota'];
  fuenteDatos = ALUMNOS;
  constructor() { }

  ngOnInit(): void {
  }

}
