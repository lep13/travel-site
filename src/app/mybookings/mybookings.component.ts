import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from '../shared/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { CdialogComponent } from '../cdialog/cdialog.component';
@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {
 
  bookings$: Observable<any[]>;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private authService : AuthService,
    private dialog: MatDialog
  ) {
    this.authService = authService;
    this.bookings$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          const userBookingsRef = this.afs.collection(`bookings/${user.uid}/userBookings`).snapshotChanges();
          return userBookingsRef.pipe(
            // Map snapshotChanges to get the document data along with the document ID
            map(actions => {
              return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, data };
              });
            })
          );
        } else {
          return of([]);
        }
      })
    );
  }

  ngOnInit(): void {}
 
  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  
  openCancelBookingDialog(): void {
    const dialogRef = this.dialog.open(CdialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      console.log('Cancel Booking dialog closed');
    });
  }
  getCurrentDate(): Date {
    return new Date();
   }
  cancelBooking(bookingId: string) {
    this.afAuth.currentUser.then((user) => {
      if (user) {
       
        console.log('Deleting booking with ID:', bookingId);
        const userBookingRef = this.afs.collection(`bookings/${user.uid}/userBookings`).doc(bookingId);
        userBookingRef.delete()
          .then(() => {
            console.log('Booking canceled successfully!');
            this.openCancelBookingDialog(); 
          })
          .catch((error) => {
            console.error('Error canceling booking:', error);
          });
      }
    }).catch((error) => {
      console.error('Error getting current user:', error);
    });
  }

  
  
 
  
}
