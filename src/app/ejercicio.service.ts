import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Ejercicio } from "./Ejercicio";
import { EJERCICIOS } from "./collection-ejercicios";

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {


  constructor() { }

  getEjercicios():Observable<Ejercicio[]>{
    return of(EJERCICIOS);
  }
}
