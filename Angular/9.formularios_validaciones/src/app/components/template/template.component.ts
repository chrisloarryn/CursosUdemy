import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template",
  templateUrl: "./template.component.html",
  styles: [
    `
      .ng-invalid.ng-touched:not(form) {
        border: 1px solid red;
      }
    `
  ]
})
export class TemplateComponent {
  usuario: Object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: "",
    sexo: "Hombre"
  };

  sexos = ["Hombre", "Mujer"];

  paises = [
    {
      codigo: "CHL",
      nombre: "Chile"
    },
    {
      codigo: "SPA",
      nombre: "Spain"
    },
    {
      codigo: "ARG",
      nombre: "Argentina"
    }
  ];

  constructor() {}

  guardar(forma: NgForm): void {
    console.log("NgForm::", forma);
    console.log("Valor Forma::", forma.value);
    console.log("Usuario::", this.usuario);
  }
}
