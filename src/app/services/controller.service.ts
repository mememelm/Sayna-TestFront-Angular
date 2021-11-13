import { Endpoints } from 'src/app/constants/classes/endpoints';
import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(
    public firebase: FirebaseService
  ) { }

  image(img: string): string {
    return Endpoints.SECURE + this.firebase.getImage(img)
  }
}
