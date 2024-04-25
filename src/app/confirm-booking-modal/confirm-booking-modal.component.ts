import { Component, Output, EventEmitter,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-confirm-booking-modal',
  templateUrl: './confirm-booking-modal.component.html',
  styleUrls: ['./confirm-booking-modal.component.css']
})
export class ConfirmBookingModalComponent {
  @Output() confirmation = new EventEmitter<{ name: string; email: string; phone: string }>();
  @Input() packageName: string = '';
  name: string = '';
  email: string = '';
  phone: string = '';
 
  showModal: boolean = false;
 
  openModal() {
    this.showModal = true;
  }
 
  closeModal() {
    this.showModal = false;
  }
 
  validateName(name: string): boolean {
    const regex = /^[a-zA-Z ]+$/; // Allows letters and spaces
    return regex.test(name) && name.trim().length > 0;
  }
 
  validateEmail(email: string): boolean {
    return /^[a-zA-Z0-9][^\s@]*@gmail\.com$/.test(email);
  }
 
  validatePhoneNumber(phone: string): boolean {
    return /^\d{10}$/.test(phone);
  }
 
  confirm() {
 
   
  }
 
  form:FormGroup = this.fb.group({
   
    to_name : '',
   
    to_email:''
  });
  constructor(private fb: FormBuilder){}
  async send()
  {
    if (!this.validateName(this.name)) {
      alert('Name is required and must not contain special characters.');
      return;
    }
    if (!this.validateEmail(this.email)) {
      alert('Invalid email address.');
      return;
    }
 
    if (!this.validatePhoneNumber(this.phone)) {
      alert('Phone number must be 10 digits.');
      return;
    }
    console.log("hello");
   
    this.confirmation.emit({ name: this.name, email: this.email, phone: this.phone });
    this.closeModal();
 
    emailjs.init('MDul_0LJZH5rfOFKk');
    emailjs.send("service_ff6c129", "template_ghho7zy", {
      to_name: this.name,
      message: this.packageName,
      to_email: this.email,
    }).then((response) => {
      console.log('Email sent:', response);
      alert("Confirmation mail has been sent");
    }).catch((error) => {
      console.error('Email sending error:', error);
      alert("Failed to send confirmation mail. Please check your email address.");
    });
  }
 
}