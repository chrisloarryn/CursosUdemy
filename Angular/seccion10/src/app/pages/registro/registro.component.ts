import { Component, OnInit } from "@angular/core";
import { UsuarioModel } from "../../models/usuario.model";
import { EMPTY_SOURCE_SPAN } from "@angular/compiler";
import { NgForm } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {
  usuario: UsuarioModel;
  public err: Array<string>;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.usuario = new UsuarioModel();
    this.usuario.email = "cristobal.contreras@epys.cl";
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.auth.nuevoUsuario(this.usuario).subscribe(
      res => {
        console.log(res);
      },
      err => {
        this.err = err.error.error.errors[0];
        // console.log(err.error.error.errors[0]);
      }
    );
  }
}
