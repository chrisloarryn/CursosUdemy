import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  public err: Array<string>;

  constructor(private auth: AuthService) {}

  ngOnInit() {}

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      type: 'info',
      text: 'Espere un momento..',
      allowOutsideClick: false

    });

    Swal.showLoading();

    this.auth.login(this.usuario).subscribe(
      res => {
        console.log(res);
        Swal.close();
      },
      err => {
        // console.log(err.error.error.errors[0]);
        Swal.fire({
          type: 'info',
          text: 'Espere un momento..',
          title: 'Error al autenticar'
          allowOutsideClick: false

        });
        this.err = err.error.error.errors[0];
      }
    );
  }
}
