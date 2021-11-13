import { Injectable } from '@angular/core';
import { Firestore, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) { }

  loadImage(path: string) {
    const el = doc(this.firestore, path).path
    return el
  }
}
