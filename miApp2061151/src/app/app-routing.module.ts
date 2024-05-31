import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';

const routes: Routes = [
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: '',
    redirectTo: '/productos',
    pathMatch: 'full'
  },
  {
    path: 'productoDetalle/:id',
    component: ProductoDetalleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
