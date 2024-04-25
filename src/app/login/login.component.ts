import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  username: string = '';
  confirmPassword: string = '';
  loginActive: boolean = true;
  usernameErrorMessage :string='';
  confirmPasswordErrorMessage : string='';
  emailErrorMessage: string = '';
  passwordErrorMessage: string = '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void { }

  toggleForm(form: string) {
    this.loginActive = (form === 'login');
  }

  login() {
    this.clearErrorMessages();
    if (!this.validateEmailAndPassword()) {
      return;
    }

    this.auth.login(this.email, this.password);
    alert("Logged In Successfully!")
    this.clearFields();
  }

  register() {
    this.clearErrorMessages();
    if (!this.validateRegistrationFields()) {
      return;
    }

    this.auth.register(this.email, this.password, this.username)
   
      .then(() => {
      
        this.clearFields();
      })
      .catch(error => {
        console.error('Error registering user:', error);
        // Handle registration error, if necessary
      });
  }

  private validateEmailAndPassword(): boolean {
    let isValid = true;

    if (!this.email) {
      this.emailErrorMessage = 'Email is required';
      isValid = false;
    } else if (!this.isValidEmail(this.email)) {
      this.emailErrorMessage = 'Invalid email format';
      isValid = false;
    }

    if (!this.password) {
      this.passwordErrorMessage = 'Password is required';
      isValid = false;
    } else if (this.password.length < 6) {
      this.passwordErrorMessage = 'Password must be at least 6 characters long';
      isValid = false;
    }

    return isValid;
  }

  private validateRegistrationFields(): boolean {
    let isValid = this.validateEmailAndPassword();

    if (!this.username) {
      this.usernameErrorMessage = 'Username is required';
      isValid = false;
    }

    if (this.password !== this.confirmPassword) {
      this.confirmPasswordErrorMessage = 'Passwords do not match';
      isValid = false;
    }

    return isValid;
  }

  private isValidEmail(email: string): boolean {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private clearErrorMessages() {
    this.emailErrorMessage = '';
    this.passwordErrorMessage = '';
    this.usernameErrorMessage = '';
    this.confirmPasswordErrorMessage = '';
  }

  private clearFields() {
    this.email = '';
    this.password = '';
    this.username = '';
    this.confirmPassword = '';
  }
}
