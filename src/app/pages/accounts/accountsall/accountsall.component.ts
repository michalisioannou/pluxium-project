import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatDialog } from "@angular/material/dialog";
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { ExportComponent } from 'src/app/materials/export/export.component';
import { DialogexpComponent } from 'src/app/material/dialogexp/dialogexp.component';
import { Accountsmt5Service } from 'src/app/services/accountsmt5.service';

@Component({
  selector: 'app-accountsall',
  templateUrl: './accountsall.component.html',
  styleUrls: ['./accountsall.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AccountsallComponent {

  columnsToDisplay = ['client', 'name', 'email', 'country', 'group', 'balance', 'equity', 'floatingpl', 'agentaccount'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Accountsmt5 | null;
  displayedColumns = ['client', 'name', 'email', 'country', 'group', 'balance', 'equity', 'floatingpl', 'agentaccount', 'star'];
  MenuPositionExample: [];
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));
  options = this._formBuilder.group({
    color: this.colorControl,
    fontSize: this.fontSizeControl,
  });
  durationInSeconds = 5;
  dataSource: MatTableDataSource<Accountsmt5>;
  accountsmt5: Accountsmt5[] = [];
  columns: string[] = ['client', 'name', 'email', 'country', 'group', 'balance', 'equity', 'floatingpl', 'agentaccount', 'expand'];

  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog, private _formBuilder: FormBuilder,
    public Accountsmt5service: Accountsmt5Service
    ) {}

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value || 0);
  }
  
  openDialog() {
    this.dialog.open(DialogexpComponent, {
      height: '450px',
      width: '11500px'
    });
  }

  exportDialog() {
    this.dialog.open(ExportComponent, {
      height: '230px',
      width: '120px'
    }
    );
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

    this.Accountsmt5service.getAccountsmt5().then(response => {
      this.accountsmt5 = response.data;

      this.dataSource = new MatTableDataSource(this.accountsmt5);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface Accountsmt5 {
  client: string;
  name: string;
  email: string;
  country: string;
  expand: string;
}

const Accountsmt5: Accountsmt5[] = [];



