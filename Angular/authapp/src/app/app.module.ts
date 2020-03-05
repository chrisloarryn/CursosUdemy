import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {PreciosComponent} from './components/precios/precios.component';
import {ProtegidaComponent} from './components/protegida/protegida.component';
import {HomeComponent} from './components/home/home.component';

import {APP_ROUTING} from './app.routes';
// servicios
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PreciosComponent,
        ProtegidaComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        APP_ROUTING,
    ],
    providers: [
        AuthService,
        AuthGuardService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
