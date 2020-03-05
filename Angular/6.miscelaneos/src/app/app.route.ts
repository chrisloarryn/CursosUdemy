// Ruta Padre
import { UsuarioComponent } from "./components/usuario/usuario.component";

// Home Component
import { HomeComponent } from "./components/home/home.component";
// Common modules
import { RouterModule, Routes } from "@angular/router";

// Importo rutas hijas USUARIOS_ROUTES
import { USUARIO_ROUTES } from "./components/usuario/usuario.routes";

const APP_ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "usuario/:id",
    component: UsuarioComponent,
    children: USUARIO_ROUTES
  },

  { path: "**", pathMatch: "full", redirectTo: "home" }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
