import { APP_ROUTING } from "./app.route";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

APP_ROUTING;

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgStyleComponent } from "./components/ng-style/ng-style.component";
import { CssComponent } from "./components/css/css.component";
import { ClasesComponent } from "./components/clases/clases.component";
import { ResaltadoDirective } from "./directives/resaltado.directive";
import { NgSwitchComponent } from "./components/ng-switch/ng-switch.component";
import { HomeComponent } from "./components/home/home.component";
import { UsuarioComponent } from "./components/usuario/usuario.component";
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClasesComponent,
    ResaltadoDirective,
    NgSwitchComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, FormsModule, APP_ROUTING],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
