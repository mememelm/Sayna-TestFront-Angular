import { Injectable } from '@angular/core';
import { Firestore, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) { }

  getImage(path: string): string {
    const element = doc(this.firestore, path).path
    return element
  }
}
