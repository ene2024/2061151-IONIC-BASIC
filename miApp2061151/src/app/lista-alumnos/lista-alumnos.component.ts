import { Component, OnInit } from '@angular/core';
import { alumno } from './alumno.model';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})

export class ListaAlumnosComponent  implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  result: string = '';

  ngOnInit() {}

  alumnos : alumno[] = [];

  isActionSheetOpen = false;
  public actionSheetButtons = [];

  alumno: alumno ={
    nombre: '',
    presente: false
  }

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }

  agregaAlumno(): void{

    this.alumnos.push(this.alumno)
    this.alumno = {
      nombre: '',
      presente: false
    }
  }

  eliminarAlumno(alumno: any) {
    // Encuentra el índice del alumno en la lista de alumnos para eliminar
    const index = this.alumnos.indexOf(alumno);
    if (index > -1) {
      // Elimina el alumno de la lista
      this.alumnos.splice(index, 1);
    }
  }
 
}
