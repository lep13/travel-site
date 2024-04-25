import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  user: firebase.default.User | null = null; // User object
  username: string = '';
  email:string='';
  constructor(private route: ActivatedRoute, private afAuth: AngularFireAuth, 
              private authservice: AuthService
  ) { }

  ngOnInit(): void {
    this.authservice.username.subscribe({
      next: (username) => {
        this.username = username; // Always get the latest value
      },
    });
  }
  
  

}
