import { Lista } from "./../models/lista.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DeseosService {
  listas: Lista[] = [];

  constructor() {
    this.cargarStorage();
    /* 
    const lista1 = new Lista("Recolectar piedras del infinito");
    const lista2 = new Lista("Heroes a desaparecer"); 
    */
    // this.listas.push(lista1, lista2);
    // console.log("Service ok: " + this.listas);
  }
  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }
  borrarLista(lista: Lista) {
    this.listas = this.listas.filter(listaData => listaData.id !== lista.id);
    this.guardarStorage();
  }

  editarLista(lista: Lista) {
    this.listas = this.listas.filter(listaData => listaData.id !== lista.id);
    this.obtenerLista(lista.id);
    console.log(lista);
    console.log(this.listas);

    //this.guardarStorage();
  }

  obtenerLista(id: string | number) {
    id = Number(id);
    return this.listas.find(listaData => listaData.id === id);
  }

  guardarStorage() {
    localStorage.setItem("data", JSON.stringify(this.listas));
  }

  cargarStorage() {
    if (localStorage.getItem("data")) {
      this.listas = JSON.parse(localStorage.getItem("data"));
    } else {
      this.listas = [];
    }
  }
}
