import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './pages/heroes/heroes.component';
import {HeroeComponent} from './pages/heroe/heroe.component';


/****************************************************************/
/* RUTAS */
/****************************************************************/

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  // {path: '**', pathMatch: 'full', redirectTo: 'heroes'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {
}
