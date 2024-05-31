import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Foto } from './foto.model';


@Injectable({
  providedIn: 'root'
})
export class FotoService {
  public fotoscapturadas: Foto[] = [];

  constructor() { }

  //Funcion para tomar foto
  public async addNewToGallery() {
    
    const foto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.fotoscapturadas.unshift({
      filepath: '',
      webViewPath: foto.webPath
    })
  }

  //Funcion para escoger de la galeria
  public async EscogerFoto() {
    
    const foto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
      quality: 100
    });

    this.fotoscapturadas.unshift({
      filepath: '',
      webViewPath: foto.webPath
    })
  }

}