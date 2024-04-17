import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import emailjs from "@emailjs/browser";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.css",
})
export class ContactComponent {
  name: string = "";
  email: string = "";
  message: string = "";
  validateName(name: string): boolean {
    const regex = /^[a-zA-Z ]+$/; // Allows letters and spaces
    return regex.test(name) && name.trim().length > 0;
  }

  validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  form: FormGroup = this.fb.group({
    to_name: '',

    to_email: '',
    message: '',
  });
  constructor(private fb: FormBuilder) {}
  async send() {
    if (!this.validateName(this.name)) {
      alert("Name is required and must not contain special characters.");
      return;
    }
    if (!this.validateEmail(this.email)) {
      alert("Invalid email address.");
      return;
    }

    console.log("hello");
    emailjs.init('MDul_0LJZH5rfOFKk');
    emailjs
      .send("service_ff6c129", "template_347xgwe", {
        to_name: this.name,
        message: this.message,
        to_email: this.email,
      })
      .then((response) => {
        console.log("Email sent:", response);
        alert("Your Message has been Reached to us!");
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        alert(
          "Failed to send confirmation mail. Please check your email address."
        );
      });
  }
}
