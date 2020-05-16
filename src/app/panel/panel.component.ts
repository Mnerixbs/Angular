import { Component, OnInit } from '@angular/core';
import { Ejercicio } from "../Ejercicio";
import { EjercicioService } from "../ejercicio.service";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {


  ejercicios:Ejercicio[];
  constructor(private ejercicioService:EjercicioService) {
    console.log("componente panel creado.....");
   }

  ngOnInit(): void {
    console.log("componente ejercicos ngoninit");
    this.getEjercicios();
  }
  getEjercicios():void{
    this.ejercicioService.getEjercicios().subscribe(ejercicios=>this.ejercicios=ejercicios.slice(1,5))
  }

}
