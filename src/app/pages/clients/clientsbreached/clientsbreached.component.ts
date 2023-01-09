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
import { EditcolumnComponent } from 'src/app/material/editcolumn/editcolumn.component';

@Component({
  selector: 'app-clientsbreached',
  templateUrl: './clientsbreached.component.html',
  styleUrls: ['./clientsbreached.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ClientsbreachedComponent {
  clientid: string;
  name: string;
  surname: string;
  country: string;
  city: string;
  email: string;
  phone: string;
  active: string;
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  definedColumns = ['clientid', 'name', 'surname', 'email', 'country', 'city', 'phone', 'active'];
  columnsToDisplay = ['clientid', 'name', 'surname', 'email', 'country', 'city', 'phone', 'active'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: PeriodicElement | null;
  displayedColumns = ['clientid', 'name', 'surname', 'email', 'country', 'city', 'phone', 'active','star'];
  MenuPositionExample: [];
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));
  options = this._formBuilder.group({
    color: this.colorControl,
    fontSize: this.fontSizeControl,
  });
  durationInSeconds = 5;

  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog, private _formBuilder: FormBuilder) {}

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

  openEditColumnDialog() {
    const dialogRef = this.dialog.open(EditcolumnComponent, {
      data: {
        definedColumns: this.definedColumns,
        columnsToDisplay: Object.assign([], this.columnsToDisplay)
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
    const dialogSubmitSubscription =
      dialogRef.componentInstance.submitClicked.subscribe(result => {
        this.columnsToDisplay = result;
        this.columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
        dialogSubmitSubscription.unsubscribe();
      });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
  toggleCheckBox(element: any) {
    return (this.columnsToDisplay.indexOf(element) != -1) ? true : false;
  }
}


export interface PeriodicElement {
  clientid: string;
  name: string;
  surname: string;
  country: string;
  city: string;
  email: string;
  phone: string;
  active: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {
    clientid: '123526',
    name: 'Client Test',
    email: 'test@test.t.',
    surname: 'Test',
    country: 'Africa',
    city: 'Basic',
    phone: '234234',
    active: 'Yes'
  },
  {
    name: '2',
    clientid: 'Helium',
    email: 'test@test.t.',
    surname: 'Test',
    country: 'Africa',
    city: 'Basic',
    phone: '234234',
    active: 'Yes'
  },
  {
    name: '3',
    clientid: 'Lithium',
    email: 'test@test.t.',
    surname: 'Test',
    country: 'Africa',
    city: 'Basic',
    phone: '234234',
    active: 'Yes'
  },
  {
    name: '4',
    clientid: 'Beryllium',
    email: 'test@test.t.',
    surname: 'Test',
    country: 'Africa',
    city: 'Basic',
    phone: '234234',
    active: 'Yes'
  },
  {
    name: '5',
    clientid: 'Boron',
    email: 'test@test.t.',
    surname: 'Test',
    country: 'Africa',
    city: 'Basic',
    phone: '234234',
    active: 'Yes'
  },
  {
    name: '6',
    clientid: 'Carbon',
    email: 'test@test.t.',
    surname: 'Test',
    country: 'Africa',
    city: 'Basic',
    phone: '234234',
    active: 'Yes'
  },
  {
    name: '7',
    clientid: 'Nitrogen',
    email: 'test@test.t.',
    surname: 'Test',
    country: 'Africa',
    city: 'Basic',
    phone: '234234',
    active: 'Yes'
  },
  {
    name: '8',
    clientid: 'Oxygen',
    email: 'test@test.t.',
    surname: 'Test',
    country: 'Africa',
    city: 'Basic',
    phone: '234234',
    active: 'Yes'
  },
  {
    name: '9',
    clientid: 'Fluorine',
    email: 'test@test.t.',
    surname: 'Test',
    country: 'Africa',
    city: 'Basic',
    phone: '234234',
    active: 'Yes'
  },
  {
    name: '10',
    clientid: 'Neon',
    email: 'test@test.t.',
    surname: 'Test',
    country: 'Africa',
    city: 'Basic',
    phone: '234234',
    active: 'Yes'
  },
];



