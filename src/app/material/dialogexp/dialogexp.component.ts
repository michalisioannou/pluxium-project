import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from "@angular/material/snack-bar";
import { ExtradaysComponent } from 'src/app/materials/extradays/extradays.component';
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationComponent, ConfirmDialogModel } from 'src/app/materials/dialog/confirmation/confirmation.component';
import { CreateNewComponent } from 'src/app/materials/dialog/create-new/create-new.component';

@Component({
  selector: 'dialogexp',
  templateUrl: 'dialogexp.component.html',
  styleUrls: ['./dialogexp.component.css']
})

export class DialogexpComponent {
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));
  options = this._formBuilder.group({
    color: this.colorControl,
    fontSize: this.fontSizeControl,
  });
  durationInSeconds = 5;
  result: string = '';

  constructor(private _formBuilder: FormBuilder, private _snackBar: MatSnackBar, public dialog: MatDialog) {}
  
  createNew() {
    this.dialog.open(CreateNewComponent, {
      height: '320px',
      width: '400px'
    });
  }

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value || 0);
  }
  addCredit(message: string) {
    this._snackBar.open(message, 'credits have been added, cliend id:');
  }
  removeCredit(message: string) {
    this._snackBar.open(message, 'credits have been removed, cliend id:');
  }
  
  confirmDialog(): void {
    const message = `Deleting can be permanent and irreversible`;

    const dialogData = new ConfirmDialogModel("Are you sure you want to proceed?", message);

    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: "450px",
      height: "300px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
    });
    
  }
  
}

