import { DeseosService } from "./../../services/deseos.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  listas: any;
  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    this.listas = deseosService;
    console.log(deseosService.listas);
  }
  async agregarLista() {
    const alert = await this.alertCtrl.create({
      header: "Nueva lista",
      //subHeader: "Subtitle",
      inputs: [
        {
          name: "titulo",
          type: "text",
          placeholder: "Nombre de la lista"
        }
      ],
      //message: "This is an alert message.",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log("Cancelar");
          }
        },
        {
          text: "Crear",
          //role: "",
          handler: data => {
            console.log(data);
            //this.listas.push(data);
            if (data.titulo.length === 0) {
              return;
            }
            const listaId = this.deseosService.crearLista(data.titulo);
            // Creo la lista

            this.router.navigateByUrl(`tabs/tab1/agregar/${listaId}`);
          }
        }
      ]
    });
    alert.present();
  }
}
