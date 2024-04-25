import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-cdialog',
  templateUrl: './cdialog.component.html',
  styleUrl: './cdialog.component.css'
})
export class CdialogComponent {
  constructor(public dialogRef: MatDialogRef<CdialogComponent>) {}
  
  closeDialog(): void {
    this.dialogRef.close();
  }
}