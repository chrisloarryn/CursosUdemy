import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: []
})
export class UsuarioComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(parametros => {
      console.log("RUTA Padre");
      console.log(parametros);
    });
  }

  ngOnInit() {}
}
