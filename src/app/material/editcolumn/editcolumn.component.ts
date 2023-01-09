import { Component, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCheckboxChange } from '@angular/material/checkbox';


@Component({
  selector: 'app-editcolumn',
  templateUrl: './editcolumn.component.html',
  styleUrls: ['./editcolumn.component.css']
})
export class EditcolumnComponent implements OnInit {

  definedColumns = [];
  columnsToDisplay = [];
  @Output() submitClicked = new EventEmitter<any>();
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<EditcolumnComponent>) {
    this.definedColumns = data.definedColumns;
    this.columnsToDisplay = data.columnsToDisplay;
  }

  ngOnInit(): void {
  }

  toggleCheckBox(element: never) {
    return (this.columnsToDisplay.indexOf(element) != -1) ? true : false;
  }

  checkboxChanged(event: MatCheckboxChange, column: never) {
    const index: number = this.columnsToDisplay.indexOf(column);
    if (index !== -1) {
      this.columnsToDisplay.splice(index, 1);
    } else {
      this.columnsToDisplay.push(column);
    }
  }

  saveDialog() {
    const data = 'Your data';
    this.submitClicked.emit(this.columnsToDisplay);
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
