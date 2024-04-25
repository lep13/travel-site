import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
// import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = true;
  user: firebase.default.User | null = null;
  username: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private fireauth: AngularFireAuth, private router: Router) {
    this.fireauth.authState.subscribe((user) => {
      this.loggedIn = !!user;
      this.user = user;

      if (user) {
        const displayName = user.displayName || '';
        this.username.next(displayName);
      } else {
        this.username.next('');
      }
    });
  }


   //login

  login(email :string,password : string)
  {  
    console.log("hello");
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true');
      this.fireauth.currentUser.then((data) => {
        console.log(data);
        if(data && data.displayName && data.email)  {
          // this.username = data.displayName;
          // this.email = data.email;
        }
      })
      // alert("Logged in");
      this.router.navigate(['/']);
    },err=>{
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }


  //register
  
  register(email: string, password: string, username: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.fireauth.createUserWithEmailAndPassword(email, password)
        .then((credential) => {
          credential.user?.updateProfile({ displayName: username }).then(() => {
            alert("Registration Successful");
            this.router.navigate(['/login']);
            resolve();
          }).catch((error) => {
            console.error("Error updating profile: ", error);
            alert("Registration Successful, but failed to update username");
            this.router.navigate(['/login']);
            resolve();
          });
        }).catch((error) => {
          console.error("Error registering user: ", error);
          alert(error.message);
          this.router.navigate(['/register']);
          reject(error);
        });
    });
  }

  //sign out
  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['']);
    },err=>{
      alert(err.message);
    })
  }
  isLoggedIn() {
    return this.user !== null;
  }

  // getUsername(): string | null {
  //   const user = firebase.auth().currentUser;
  //   return user ? user.displayName : null;
  // }
  

}
