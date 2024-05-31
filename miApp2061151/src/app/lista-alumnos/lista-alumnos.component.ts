import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})

export class ListaAlumnosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  alumnos: any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];

  async presentActionSheet() {
    const actionSheet = document.createElement('ion-action-sheet');
    actionSheet.header = 'Acciones';

    actionSheet.buttons = [
      {
        text: 'Eliminar',
        role: 'destructive',
        data: {
          action: 'delete',
        },
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        data: {
          action: 'cancel',
        },
      },
    ];

    document.body.appendChild(actionSheet);
    await actionSheet.present();
  }

}
