import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { CamaraComponent } from './camara/camara.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/camara',
    pathMatch: 'full'
  },
  {
    path: 'camara',
    component: CamaraComponent
  },
  {
    path: 'producto/:id',
    component: ProductoDetalleComponent
 },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
