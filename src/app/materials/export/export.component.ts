import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Table1Component } from 'src/app/material/table1/table1.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountsallComponent, Accountsmt5 } from 'src/app/pages/accounts/accountsall/accountsall.component';
import { CsvExporterService } from 'mat-table-exporter';
import { FormControl } from '@angular/forms';


export type DialogDataSubmitCallback<T> = (row: T) => void;

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  input: FormControl = new FormControl('');

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { callback: DialogDataSubmitCallback<any>; defaultValue: any },
    private dialogRef: MatDialogRef<ExportComponent>
  ) {}

  ngOnInit() {
    if (this.data.defaultValue) {
      this.input.patchValue(this.data.defaultValue);
    }
  }
}



