import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicenciasComponent } from './pages/licencias/licencias.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PosicionesComponent } from './pages/posiciones/posiciones.component';
import { RutasComponent } from './pages/rutas/rutas.component';
import { TransportistasComponent } from './pages/transportistas/transportistas.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },

  { path: '', 
   component:MenuComponent, 
   children: [
     {path: 'welcome', component:WelcomeComponent},
     {path: 'transportistas', component:TransportistasComponent},
     {path: 'licencias', component:LicenciasComponent},
     {path: 'posiciones', component:PosicionesComponent},
     {path: 'rutas', component:RutasComponent}
   ]
},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
