import { Lista } from "./../../models/lista.model";
import { Router } from "@angular/router";
import { DeseosService } from "./../../services/deseos.service";
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { AlertController, IonList } from "@ionic/angular";

@Component({
  selector: "app-listas",
  templateUrl: "./listas.component.html",
  styleUrls: ["./listas.component.scss"]
})
export class ListasComponent implements OnInit {
  @ViewChild(IonList, "lista") lista: IonList;
  @Input() terminada = true;
  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  listaSeleccionada(lista: Lista) {
    console.log(lista);
    if (this.terminada) {
      this.router.navigateByUrl(`tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`tabs/tab1/agregar/${lista.id}`);
    }
  }

  borrarLista(lista: Lista) {
    this.deseosService.borrarLista(lista);
  }
  editarLista(lista: Lista) {
    this.deseosService.editarLista(lista);
  }

  async editarListas(lista: Lista) {
    const alert = await this.alertCtrl.create({
      header: "Editar lista",
      //subHeader: "Subtitle",
      inputs: [
        {
          name: "titulo",
          type: "text",
          value: lista.titulo
        }
      ],
      //message: "This is an alert message.",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log("Cancelar");
            this.lista.closeSlidingItems();
          }
        },
        {
          text: "Actualizar",
          //role: "",
          handler: data => {
            console.log(data);
            //this.listas.push(data);
            if (data.titulo.length === 0) {
              return;
            }

            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ]
    });
    alert.present();
  }
}
