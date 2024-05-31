import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Foto } from './foto.model';
//funcion para tomar foto  

@Injectable({
  providedIn: 'root'
})
export class FotoService {
  public fotoscapturadas: Foto[] = [];

  constructor() { }

  public async addNewToGallery() {
    
    const foto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
    });

    this.fotoscapturadas.unshift({
      filepath: '',
      webViewPath: foto.webPath
    })
  }

}