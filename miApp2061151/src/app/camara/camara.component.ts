import { Component, OnInit } from '@angular/core';
import { FotoService } from '../foto.service';
import { Foto } from '../foto.model';


@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent  implements OnInit {

  constructor(public foto : FotoService) { }
  

  public fotos:Foto[] =this.foto.fotoscapturadas;

  ngOnInit() {}

  selfie(){
    this.foto.addNewToGallery()
  }

  elegir(){
    this.foto.EscogerFoto()
  }

}