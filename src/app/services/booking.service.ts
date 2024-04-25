import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private firestore: Firestore) {}

  confirmBooking(booking: { uid: string; bookingData: any }): Promise<string> {
    const userBookingsRef = collection(this.firestore, `bookings/${booking.uid}/userBookings`);
    return addDoc(userBookingsRef, booking.bookingData).then((docRef) => docRef.id);
  }
}