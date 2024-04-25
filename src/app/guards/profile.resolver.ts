import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Import AngularFireAuth

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<any> {
  constructor(private afAuth: AngularFireAuth) {} // Inject AngularFireAuth

  resolve(): Observable<any> {
    return new Observable(observer => {
      const unsubscribe = this.afAuth.authState.subscribe(user => {
        // if (user) {
        //   observer.next(user);
        //   observer.complete();
        // } else {
        //   observer.next(null);
        //   observer.complete();
        // }
      });

      return () => unsubscribe.unsubscribe();
    });
  }
}
