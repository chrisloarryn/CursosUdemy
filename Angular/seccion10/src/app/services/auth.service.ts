import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from "../models/usuario.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private url = "https://identitytoolkit.googleapis.com/v1";
  private apikey = "AIzaSyBm-UUmXlz4jGxAYAyKKwr32Yi4uefVtZs";
  userToken: string;

  // Crear nuevo usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  logout() {}
  login(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http
      .post(
        `${this.url}/accounts:signInWithPassword?key=${this.apikey}`,
        authData
      )
      .pipe(
        map(res => {
          this.guardarToken(res["idToken"]);
          return res;
        })
      );
  }
  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http
      .post(`${this.url}/accounts:signUp?key=${this.apikey}`, authData)
      .pipe(
        map(res => {
          this.guardarToken(res["idToken"]);
          return res;
        })
      );
  }

  private guardarToken(idToken: string) {
    const t = this;

    t.userToken = idToken;
    localStorage.setItem("token", idToken);
  }
  leerToken() {
    const t = this;
    if (localStorage.getItem("token"))
      t.userToken = localStorage.getItem("token");
    else t.userToken = "";

    return t.userToken;
  }
}
