import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(
    public firebase: FirebaseService
  ) { }
}
